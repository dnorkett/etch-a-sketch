const hoverToggle = (e) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
}

const drawGrid = (e) => {
    let n = lengthInput.value;
    let existingGrid = document.querySelector('.container');

    if (existingGrid) {
        existingGrid.parentNode.removeChild(existingGrid);
    }

    if (n > 0) {
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container');


        for (let i=0; i < n*n; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridSquare.setAttribute('id', i);
            gridSquare.addEventListener("mouseover", hoverToggle);
            gridSquare.style.backgroundColor = 'white';
            containerDiv.appendChild(gridSquare);
        }
        
        mainDiv.appendChild(containerDiv);

        containerDiv.style.display = "grid";    
        containerDiv.style.gridTemplateColumns = `repeat(${n}, 1fr)`
        containerDiv.style.gridTemplateRows = `repeat(${n}, 1fr)`

        lengthInput.value = '';
    }
}

const clearGrid = () => {
    let grid = document.querySelectorAll('.gridSquare');

    for (item of grid) {
        item.style.backgroundColor = 'white';
    }
}

const mainDiv = document.querySelector('.main');
const lengthInput = document.querySelector('#length');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');

drawButton.addEventListener("click", drawGrid);
resetButton.addEventListener("click", clearGrid);