let gridSize = 64;

let container = document.getElementById("container");

function addBlocks(gridSize){
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < gridSize*gridSize; i++){
        let block = document.createElement("div");
        block.setAttribute("class","block");
        block.style.height = "100%";
        block.style.width = "100%";
        block.style.backgroundColor = "white";
        block.addEventListener("mouseenter",() => block.style.backgroundColor = "rgba(160, 58, 260, 0.9)");
        container.appendChild(block);
    }
};
document.onload = addBlocks(gridSize);

const resetButton = document.getElementById("resetButton");
const resizeButton = document.getElementById("resizeButton");
resetButton.addEventListener("click", () => resetColor());
resizeButton.addEventListener("click", () => changeSize());

function resetColor(){
    const blocks = document.querySelectorAll("div.block");
    blocks.forEach(block => block.style.backgroundColor = "white");
}

function changeSize(){
    removeBlocks(container);
    gridSize = prompt("New Size? (1-100)");
    if (gridSize > 100 || gridSize < 1){
        while (gridSize > 100 || gridSize < 1){
            gridSize = prompt("New Size? (1-100)");
        }
    }
    addBlocks(gridSize);
}

function removeBlocks(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
