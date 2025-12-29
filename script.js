document.addEventListener("DOMContentLoaded", loadGoals);

function addGoal() {
  const input = document.getElementById("goalInput");
  const list = document.getElementById("goalList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("fade-in");

  list.appendChild(li);

  saveGoals();
  input.value = "";
}

function saveGoals() {
  const goals = [];
  document.querySelectorAll("#goalList li").forEach(li => {
    goals.push(li.innerText);
  });
  localStorage.setItem("goals", JSON.stringify(goals));
}

function loadGoals() {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const list = document.getElementById("goalList");

  goals.forEach(goal => {
    const li = document.createElement("li");
    li.innerText = goal;
    li.classList.add("fade-in");
    list.appendChild(li);
  });
}
