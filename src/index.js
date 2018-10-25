const state = {
  puzzle: [
    [1,2,3,4],
    [5,null,7,8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
}
function init(){
  draw();
}
// draw puzzle
function draw(){
  document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
    rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
      colEl.textContent = state.puzzle[rowIndex][colIndex];
    });
  });
}


// event handler
document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
  rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
    colEl.addEventListener('click', (e) => {
      // colEl.textContent = null;
      // state.puzzle[rowIndex][colIndex] = null;
      console.log('rowIndex: ', state.puzzle[rowIndex]);
      console.log('colIndex: ', state.puzzle[colIndex]);

      draw();
    });
  });
});


init();
