// Os testes de cada exercício ficam separados do controlador.
window.guiasLabExercises = {
  "aula-2-exercicio-1": {
    version: 1,
    mode: "values",
    maxExtraLogs: 0,
    cases: [
      { type: "string" },
      { type: "number" },
      { type: "boolean" },
      { type: "number" },
    ],
  },
  "aula-4-exercicio-1": {
    version: 1,
    mode: "output",
    allowExtraLogs: true,
    maxExtraLogs: 5,
    cases: [
      { expected: "Temperatura agradável", hint: "Com temperatura = 28, mostre Temperatura agradável antes da mensagem de entrada." },
      { expected: "Entrada permitida", hint: "Com temIngresso e documentoValido iguais a true, mostre Entrada permitida depois da temperatura." },
    ],
  },
  "aula-8-exercicio-1": {
    version: 1,
    mode: "values",
    maxExtraLogs: 5,
    cases: [
      { value: "estou aprendendo javascript" },
      { value: "ESTOU APRENDENDO JAVASCRIPT" },
      { value: true },
      { value: 2 },
      { value: ["Variáveis", "Funções", "Arrays"] },
      { value: ["Variáveis", "Funções"] },
    ],
  },
  "aula-6-exercicio-1": {
    version: 1,
    mode: "values",
    maxExtraLogs: 5,
    cases: [
      { value: ["Estudar JavaScript", "Fazer exercício", "Revisar aula"] },
      { value: "Estudar JavaScript" },
      { value: "Fazer exercício" },
      { value: 3 },
      { value: ["Estudar JavaScript", "Fazer exercício", "Revisar aula", "Praticar código"] },
      { value: 4 },
      { value: ["Estudar JavaScript", "Fazer exercício", "Revisar aula"] },
    ],
  },
  "aula-10-exercicio-1": {
    version: 1,
    mode: "values",
    maxExtraLogs: 5,
    cases: [
      { value: [10, 25, 40, 5] },
      { value: [20, 50, 80, 10] },
      { value: [25, 40] },
    ],
  },
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
