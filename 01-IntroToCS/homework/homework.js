'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //0011 = 3, se lee de izquierda a derecha
  let suma = 0;

    for (let i = 0; i < num.length; i++) {
       suma += +num[i] * 2 ** (num.length - 1 - i);
    }
    return suma;
}


function DecimalABinario(num) {
  // tu codigo aca
  var res = "";
  while(num != 0){
    res = num % 2 + res;
    num = Math.floor(num/2);
  }
  return res;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}