function addGoal() {
  var input = document.getElementById("goalInput");
  var list = document.getElementById("goalList");

  if (input.value.trim() === "") {
    return;
  }

  var li = document.createElement("li");
  li.textContent = input.value;

  list.appendChild(li);
  input.value = "";
}
