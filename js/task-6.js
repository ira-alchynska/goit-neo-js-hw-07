

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const colorRefs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};


function createBoxes(amount) {

  colorRefs.boxesContainer.innerHTML = "";

  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "10px"; 
    boxSize += 10; 
    boxes.push(box);
  }

  colorRefs.boxesContainer.append(...boxes); 
}


function destroyBoxes() {
    colorRefs.boxesContainer.innerHTML = "";
}


colorRefs.createBtn.addEventListener("click", () => {
  const amount = Number(colorRefs.input.value);


  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
    colorRefs.input.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100");
  }
});


colorRefs.destroyBtn.addEventListener("click", destroyBoxes);


