
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

let container = document.querySelector('.container');


function getSelectedValue(){
  let e = document.getElementById("windowValue");
  let result = e.options[e.selectedIndex].value;

  console.log(result);
  
  document.querySelector('.container').innerHTML = '';

  makeGrid(result, container);
}


function makeGrid(numb, numb_grid){
  
  for(let i = 0; i < numb; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = `calc(100% / ${numb})`;
    square.style.height = `calc(100% / ${numb})`;
    square.innerHTML = `<span> ${i+1} </span>`;
    for(let k = 0; k < numb -1; k++ ) {
      let square = document.createElement('div');
      square.className = 'square';
      square.style.width = `calc(100% / ${numb})`;
      square.style.height = `calc(100% / ${numb})`;
      numb_grid.append(square);
      square.innerHTML = `<span> ${i+1} </span>`;
    }
    numb_grid.append(square);
    
  }
  console.log('colonne e righe');
}



