let streak = 0;

export function updateStreak() {
  streak++;

  const box = document.getElementById("streakBox");
  box.className = "card";
  box.innerHTML = `<h3>Streak</h3><p>${streak} days</p>`;
}