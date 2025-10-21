let count = 0;
let savedCounts = [];

const countDisplay = document.getElementById("count");
const savedDisplay = document.getElementById("savedCounts");
const increaseBtn = document.getElementById("increaseBtn");
const saveBtn = document.getElementById("saveBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

saveBtn.addEventListener("click", () => {
  if (count > 0) {
    savedCounts.push(count);
    savedDisplay.textContent = savedCounts.join(", ");
    count = 0;
    countDisplay.textContent = count;
  } else {
    alert("Count is 0 — increase it before saving!");
  }
});