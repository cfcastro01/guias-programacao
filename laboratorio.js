(() => {
  const storageKey = "guias-programacao-labs";
  const executorUrl = new URL("laboratorio/runner.html", document.currentScript.src).href;
  const statuses = ["passed", "incorrect", "error", "timeout"];
  const messages = {
    passed: "Resultado correto.",
    incorrect: "Ainda não está correto.",
    error: "Seu código apresentou um erro.",
    timeout: "O código demorou demais e foi interrompido.",
  };
  const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

  document.querySelectorAll(".javascript-lab").forEach((lab) => {
    const { courseId, exerciseId } = lab.dataset;
    const exercise = window.guiasLabExercises?.[exerciseId];
    if (!exercise) return;
    const editor = lab.querySelector(".lab-code");
    const runButton = lab.querySelector(".lab-run");
    const clearButton = lab.querySelector(".lab-clear");
    const result = lab.querySelector(".lab-result");
    const storageNotice = lab.querySelector(".lab-storage-notice");
    let lastAttempt = null;
    let passedExerciseVersion;
    let activeRun = null;
    let logs = "";
    let feedback = "";

    function readStorage() {
      try {
        const value = localStorage.getItem(storageKey);
        if (!value) return { version: 1, courses: {} };
        const parsed = JSON.parse(value);
        if (!isObject(parsed) || parsed.version !== 1 || !isObject(parsed.courses)) throw new Error();
        return parsed;
      } catch {
        storageNotice.textContent = "Não foi possível ler o rascunho salvo. Você pode continuar, mas guarde uma cópia do seu código.";
        return null;
      }
    }

    function saveDraft() {
      const saved = readStorage();
      if (!saved) return;
      if (!isObject(saved.courses[courseId])) saved.courses[courseId] = {};
      saved.courses[courseId][exerciseId] = {
        code: editor.value,
        ...(lastAttempt ? { lastAttempt } : {}),
        ...(passedExerciseVersion ? { passedExerciseVersion } : {}),
      };
      try {
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch {
        storageNotice.textContent = "Não foi possível salvar neste navegador. Guarde uma cópia do seu código antes de sair.";
      }
    }

    function showResult(text) {
      const content = [logs.trimEnd(), text, feedback].filter(Boolean).join("\n\n");
      if (result.textContent !== content) result.textContent = content;
    }

    function showDraftStatus() {
      if (activeRun) {
        showResult(editor.value === activeRun.code ? "Executando…" : "Executando a versão anterior. Alterações ainda não testadas.");
      } else if (lastAttempt && editor.value !== lastAttempt.code) {
        showResult("Alterações ainda não testadas.");
      } else if (lastAttempt) {
        showResult("Última execução: " + messages[lastAttempt.status]);
      } else {
        showResult("Escreva seu código e clique em Executar.");
      }
    }

    const saved = readStorage()?.courses[courseId]?.[exerciseId];
    if (isObject(saved)) {
      if (typeof saved.code === "string") editor.value = saved.code.slice(0, 20000);
      if (isObject(saved.lastAttempt) && typeof saved.lastAttempt.code === "string" && statuses.includes(saved.lastAttempt.status)) {
        lastAttempt = { code: saved.lastAttempt.code.slice(0, 20000), status: saved.lastAttempt.status };
      }
      if (Number.isInteger(saved.passedExerciseVersion) && saved.passedExerciseVersion > 0) passedExerciseVersion = saved.passedExerciseVersion;
    }
    showDraftStatus();

    editor.addEventListener("input", () => {
      saveDraft();
      showDraftStatus();
    });
    clearButton.addEventListener("click", () => {
      logs = "";
      feedback = "";
      result.textContent = "";
    });

    runButton.addEventListener("click", () => {
      if (activeRun) return;
      saveDraft();
      logs = "";
      feedback = "";
      runButton.disabled = true;
      const frame = document.createElement("iframe");
      frame.setAttribute("sandbox", "allow-scripts");
      frame.title = "Execução isolada do exercício";
      frame.hidden = true;
      const id = String(Date.now()) + "-" + Math.random().toString(36).slice(2);
      const code = editor.value;
      let lineCount = 0;
      let outputSize = 0;
      let sent = false;
      let testCount = 0;
      let failedTest = null;
      activeRun = { code };
      showDraftStatus();

      function finish(status, detail = "") {
        if (!activeRun) return;
        clearTimeout(watchdog);
        window.removeEventListener("message", receive);
        frame.remove();
        activeRun = null;
        runButton.disabled = false;
        lastAttempt = { code, status };
        if (status === "passed") passedExerciseVersion = exercise.version;
        saveDraft();
        feedback = detail.slice(0, 4000);
        if (failedTest) {
          const received = failedTest.received.length ? failedTest.received.join("\n") : "(nenhuma saída)";
          feedback = status === "error" ? failedTest.hint : "Esperado: " + failedTest.expected + "\nRecebido: " + received + "\n\n" + failedTest.hint;
        }
        showResult(messages[status] + (editor.value !== code ? " Alterações ainda não testadas." : ""));
      }

      function receive(event) {
        const message = event.data;
        if (event.source !== frame.contentWindow || event.origin !== "null" || !isObject(message) || message.channel !== "guias-lab") return;
        if (message.type === "ready" && !sent) {
          sent = true;
          frame.contentWindow.postMessage({ type: "run", id, code, exercise }, "*");
          return;
        }
        if (message.id !== id) return;
        if (message.type === "log" && typeof message.text === "string" && lineCount < 61 && outputSize < 20000) {
          const line = message.text.slice(0, Math.min(2100, 20000 - outputSize));
          logs += line + "\n";
          outputSize += line.length + 1;
          lineCount += 1;
        }
        if (message.type === "test" && testCount < exercise.cases.length && typeof message.label === "string" && typeof message.expected === "string" && Array.isArray(message.received) && message.received.every((text) => typeof text === "string") && typeof message.passed === "boolean" && typeof message.hint === "string") {
          testCount += 1;
          // Um exemplo de falha basta; os demais testes continuam sendo executados.
          if (!message.passed && !failedTest) failedTest = {
            expected: message.expected.slice(0, 2000),
            received: message.received.slice(0, 2).map((text) => text.slice(0, 2000)),
            hint: message.hint.slice(0, 2100),
          };
        }
        if (message.type === "result" && statuses.includes(message.status) && typeof message.detail === "string") finish(message.status, message.detail);
      }

      // Também evita que uma falha de carregamento deixe Executar preso.
      const watchdog = setTimeout(() => finish("error", "O executor não respondeu. Recarregue a página pelo servidor local e tente novamente."), 6000);
      window.addEventListener("message", receive);
      frame.src = executorUrl;
      lab.append(frame);
    });
  });
})();
