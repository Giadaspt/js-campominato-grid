
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

const container = document.querySelector('.container');
let square = makeGrid(container);
console.log(container);



function makeGrid(numb_grid){

  for(let i = 0; i < 20; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = 40 ;
    square.style.height = 40 ;
    numb_grid.append(square);
  }
  console.log(numb_grid);
}


