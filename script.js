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
