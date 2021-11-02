
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

const container = document.querySelector('.container');
let button = document.querySelector('.btn');


// makeGrid1(container);
// makeGrid2(container);
// makeGrid3(container);

let dropDown = document.getElementById('windowValue').value= '';

button.addEventListener('click', function(){

  if (dropDown.value = '1'){
    makeGrid1(container);

  }
  if (dropDown.value = '2'){
    makeGrid2(container);

  }
  if (dropDown.value = '3'){
    makeGrid3(container);

  }
})




function makeGrid1(numb_grid){
  
  for(let i = 0; i < 10; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = 'calc(100% / 10)';
    square.style.height = 'calc(100% / 10)';
    for(let k = 0; k < 9; k++ ) {
      let square = document.createElement('div');
      square.className = 'square';
      square.style.width = 'calc(100% / 10)';
      square.style.height = 'calc(100% / 10)';
      numb_grid.append(square);
    }
    numb_grid.append(square);
  }
  console.log('10 colonne e righe');

}


function makeGrid2(numb_grid){
  

  for(let i = 0; i < 9; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = 'calc(100% / 9)';
    square.style.height = 'calc(100% / 9)';
    for(let k = 0; k < 8; k++ ) {
      let square = document.createElement('div');
      square.className = 'square';
      square.style.width = 'calc(100% / 9)';
      square.style.height = 'calc(100% / 9)';
      numb_grid.append(square);
    }
    numb_grid.append(square);
  }
  console.log('9 colonne e righe');

}

function makeGrid3(numb_grid){
 

  for(let i = 0; i < 7; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = 'calc(100% / 7)';
    square.style.height = 'calc(100% / 7)';
    for(let k = 0; k < 6; k++ ) {
      let square = document.createElement('div');
      square.className = 'square';
      square.style.width = 'calc(100% / 7)';
      square.style.height = 'calc(100% / 7)';
      numb_grid.append(square);
    }
    numb_grid.append(square);
  }
  console.log('7 colonne e righe');
 
}



