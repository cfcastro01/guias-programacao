// Controla a resposta de cada exercício.
const answerButtons = document.querySelectorAll(".answer-toggle");

answerButtons.forEach((answerButton) => {
  const answerId = answerButton.getAttribute("aria-controls");
  const exerciseAnswer = document.getElementById(answerId);

  if (exerciseAnswer) {
    answerButton.addEventListener("click", () => {
      const isOpen = answerButton.getAttribute("aria-expanded") === "true";

      answerButton.setAttribute("aria-expanded", String(!isOpen));
      answerButton.textContent = isOpen
        ? "Mostrar resposta comentada"
        : "Ocultar resposta comentada";
      exerciseAnswer.hidden = isOpen;
    });
  }
});

const progressStorageKey = "guias-programacao-progress";
const lessonCompletionInputs = document.querySelectorAll(
  ".lesson-completion-input",
);

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// Retorna um objeto vazio quando não há progresso válido salvo.
function readProgress() {
  try {
    const savedProgress = localStorage.getItem(progressStorageKey);

    if (!savedProgress) {
      return {};
    }

    const parsedProgress = JSON.parse(savedProgress);
    return isObject(parsedProgress) ? parsedProgress : {};
  } catch {
    return {};
  }
}

function saveLessonProgress(courseId, lessonId, isCompleted) {
  const progress = readProgress();
  const courseProgress = isObject(progress[courseId])
    ? progress[courseId]
    : {};

  courseProgress[lessonId] = isCompleted;
  progress[courseId] = courseProgress;

  try {
    localStorage.setItem(progressStorageKey, JSON.stringify(progress));
  } catch {
    // A página continua funcionando mesmo se o navegador bloquear o armazenamento.
  }
}

function updateLessonInterface(courseId, lessonId, isCompleted) {
  lessonCompletionInputs.forEach((completionInput) => {
    const isCurrentLesson =
      completionInput.dataset.courseId === courseId &&
      completionInput.dataset.lessonId === lessonId;

    if (!isCurrentLesson) {
      return;
    }

    completionInput.checked = isCompleted;

    const completionSection = completionInput.closest(".lesson-completion");
    const completionLabel = completionSection?.querySelector(
      ".completion-label-text",
    );

    completionSection?.classList.toggle("is-completed", isCompleted);

    if (completionLabel) {
      completionLabel.textContent = isCompleted
        ? "Aula concluída — desmarcar"
        : "Marcar aula como concluída";
    }
  });

  const summaryLessons = document.querySelectorAll(
    ".summary [data-course-id][data-lesson-id]",
  );

  summaryLessons.forEach((summaryLesson) => {
    const isCurrentLesson =
      summaryLesson.dataset.courseId === courseId &&
      summaryLesson.dataset.lessonId === lessonId;

    if (!isCurrentLesson) {
      return;
    }

    const lessonStatus = summaryLesson.querySelector(".lesson-status");

    summaryLesson.classList.toggle("is-completed", isCompleted);

    if (lessonStatus) {
      lessonStatus.textContent = isCompleted ? "✓ Concluída" : "Não concluída";
    }
  });
}

const savedProgress = readProgress();

lessonCompletionInputs.forEach((completionInput) => {
  const { courseId, lessonId } = completionInput.dataset;
  const courseProgress = savedProgress[courseId];
  const isCompleted =
    isObject(courseProgress) && courseProgress[lessonId] === true;

  updateLessonInterface(courseId, lessonId, isCompleted);

  completionInput.addEventListener("change", () => {
    saveLessonProgress(courseId, lessonId, completionInput.checked);
    updateLessonInterface(courseId, lessonId, completionInput.checked);
  });
});

const exerciseAnswerInputs = document.querySelectorAll(
  ".exercise-answer-input",
);

function saveExerciseAnswer(courseId, exerciseId, answer) {
  const progress = readProgress();
  const courseProgress = isObject(progress[courseId])
    ? progress[courseId]
    : {};

  courseProgress[exerciseId] = answer;
  progress[courseId] = courseProgress;

  try {
    localStorage.setItem(progressStorageKey, JSON.stringify(progress));
  } catch {
    // A página continua funcionando mesmo se o navegador bloquear o armazenamento.
  }
}

exerciseAnswerInputs.forEach((answerInput) => {
  const { courseId, exerciseId } = answerInput.dataset;
  const courseProgress = savedProgress[courseId];

  answerInput.checked =
    isObject(courseProgress) && courseProgress[exerciseId] === answerInput.value;

  answerInput.addEventListener("change", () => {
    if (answerInput.checked) {
      saveExerciseAnswer(courseId, exerciseId, answerInput.value);
    }
  });
});
