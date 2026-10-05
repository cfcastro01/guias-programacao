// Os testes de cada exercício ficam separados do controlador.
window.guiasLabExercises = {
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
