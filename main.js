const numbers = [0, 2, 5, 1, 4, 9, 8];
function filterNumbers(arrayDeIntegers) {
  let arrayFiltrado = [];
  for (let i = 0; i < arrayDeIntegers.length; i++) {
    if(arrayDeIntegers[i] > i){
        arrayFiltrado.push(arrayDeIntegers[i]) 
    }
    
  }
  return arrayFiltrado;

}

filterNumbers(numbers);
console.log(filterNumbers(numbers));
