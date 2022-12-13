const eltColorPicker = document.getElementById('colorPicker');
const eltSizePickerSubmit = document.getElementById('sizePicker');
const eltTable = document.getElementById('pixelCanvas');
const eltGridHeight = document.getElementById('inputHeight');
const eltGridWidth = document.getElementById('inputWidth');

// 
eltSizePickerSubmit.addEventListener('submit', function(e) {
    e.preventDefault()  
    makeGrid();
})

function gridSquareListener(e) {
    e.target.style.backgroundColor = eltColorPicker.value
}

function makeGrid() {
    const gridWidth = eltGridWidth.value;
    const gridHeight = eltGridHeight.value;

    // remove children elements of the table
    while (eltTable.firstChild) {
        eltTable.firstChild.remove();
    }
    
    // create grid to the table
    for (var row = 0; row < gridWidth; row++) {
        const eltRow = document.createElement('TR');
        for (var col = 0; col < gridHeight; col++) {
            const eltCol = document.createElement('TD');
            eltCol.addEventListener('click', gridSquareListener);
            eltRow.appendChild(eltCol);
        }
        eltTable.appendChild(eltRow);
    }
}
