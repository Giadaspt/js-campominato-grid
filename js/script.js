
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

let container = document.querySelector('.container');
let square = document.getElementsByClassName("square");




function GetSelectedValue(){
  let e = document.getElementById("windowValue");
  let result = e.options[e.selectedIndex].value;
  // document.getElementById("result").innerHTML = result;
  console.log(result);

  let square = document.getElementsByClassName("square");

  if (result == '10') {
    square.classList.add("active");
  }
  
  if (result == '9'){
    square.classList.add("active");
  }
  if (result == '7'){
    square.classList.add("active");
  }
  

  makeGrid(result, container);
}


function makeGrid(numb, numb_grid){
  
  for(let i = 0; i < numb; i++ ) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = `calc(100% / ${numb})`;
    square.style.height = `calc(100% / ${numb})`;
    for(let k = 0; k < numb -1; k++ ) {
      let square = document.createElement('div');
      square.className = 'square';
      square.style.width = `calc(100% / ${numb})`;
      square.style.height = `calc(100% / ${numb})`;
      numb_grid.append(square);
    }
    numb_grid.append(square);
  }
  console.log('colonne e righe');

}


