const state = {
  puzzle: [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
  ],
  positon: {
    x: 0,
    y: 0
  }
}

// update puzzle state
document.querySelectorAll('.row').forEach((row, rowIndex) => {
  row.querySelectorAll('.col').forEach((col, colIndex) => {
    col.addEventListener('click', (e) => {
      state.puzzle[state.positon.x][state.positon.y] = col.textContent;
      state.puzzle[rowIndex][colIndex] = 0;

      state.positon = {
        x: rowIndex,
        y: colIndex
      }
      // 업데이트 된 상태를 그린다.
      drawBoard();
    });
  });
});

function drawBoard(){
  // draw puzzle
  document.querySelectorAll('.row').forEach((row, rowIndex) => {
    row.querySelectorAll('.col').forEach((col, colIndex) => {
      col.textContent = state.puzzle[rowIndex][colIndex];
    });
  });
}




drawBoard()
