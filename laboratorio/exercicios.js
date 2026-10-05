// Os testes de cada exercício ficam separados do controlador.
window.guiasLabExercises = {
  "aula-1-exercicio-1": {
    version: 1,
    mode: "output",
    allowExtraLogs: true,
    maxExtraLogs: 5,
    cases: [
      { pattern: "^Olá, [^\\s!](?:[^!\\r\\n]*[^\\s!])?!$", expected: "Olá, seu nome!", hint: "Use o formato Olá, nome!, com um nome, vírgula e ponto de exclamação." },
    ],
  },
  "aula-9-exercicio-1": {
    version: 1,
    mode: "output",
    optionalLogs: ["JavaScript", "HTML", "CSS", "0 JavaScript", "1 HTML", "2 CSS"],
    maxExtraLogs: 6,
    cases: [
      { expected: "Estou estudando JavaScript", hint: "Mostre JavaScript, HTML e CSS nessa ordem, com o início Estou estudando." },
      { expected: "Estou estudando HTML", hint: "Depois de JavaScript, mostre Estou estudando HTML." },
      { expected: "Estou estudando CSS", hint: "Depois de HTML, mostre Estou estudando CSS." },
    ],
  },
  "aula-5-exercicio-1": {
    version: 1,
    functionName: "apresentarPessoa",
    textHints: [
      { expected: "Olá,", received: "Olá", message: "Confira a vírgula depois de Olá." },
    ],
    cases: [
      { args: ["Ana"], expected: "Olá, Ana!" },
      { args: ["Carlos"], expected: "Olá, Carlos!" },
      { args: ["Marina"], expected: "Olá, Marina!" },
    ],
  },
};
