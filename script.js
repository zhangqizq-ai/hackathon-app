const ideaInput = document.getElementById("ideaInput");
const scoreButton = document.getElementById("scoreButton");
const result = document.getElementById("result");

function scoreIdea(idea) {
  let score = 50;

  if (idea.length > 80) score += 15;
  if (idea.toLowerCase().includes("ai")) score += 10;
  if (idea.toLowerCase().includes("user")) score += 10;
  if (idea.toLowerCase().includes("data")) score += 10;
  if (idea.length < 20) score -= 20;

  return Math.max(0, Math.min(score, 100));
}

scoreButton.addEventListener("click", () => {
  const idea = ideaInput.value.trim();

  if (!idea) {
    result.classList.remove("hidden");
    result.innerHTML = "<strong>Please enter an idea first.</strong>";
    return;
  }

  const score = scoreIdea(idea);

  result.classList.remove("hidden");
  result.innerHTML = `
    <h2>Score: ${score}/100</h2>
    <p><strong>Feedback:</strong> ${
      score >= 80
        ? "Strong hackathon idea. Build a small demo quickly."
        : score >= 60
        ? "Promising idea. Make the user problem clearer."
        : "Needs more focus. Try describing the target user and pain point."
    }</p>
  `;
});