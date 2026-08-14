// Controla a exibição da resposta do exercício.
const answerButton = document.querySelector(".answer-toggle");
const exerciseAnswer = document.querySelector("#exercise-answer");

if (answerButton && exerciseAnswer) {
  answerButton.addEventListener("click", () => {
    const isOpen = answerButton.getAttribute("aria-expanded") === "true";

    answerButton.setAttribute("aria-expanded", String(!isOpen));
    answerButton.textContent = isOpen
      ? "Mostrar resposta comentada"
      : "Ocultar resposta comentada";
    exerciseAnswer.hidden = isOpen;
  });
}
