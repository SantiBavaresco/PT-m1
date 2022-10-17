'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1];
  var aux = num;
  var x = 2;
  //array.push(1);

  while (aux > 1)
    {
      if(aux % x === 0)
        {
          array.push(x);
          aux = aux / x;
        }
      else
        {
          x++;
        }
    }
  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arrayAux = array;
  var aux = 0;
  var index = arrayAux.length;
  while(index > 1)
  {
    for(var i=0; i < index; i++)
    {
      if(arrayAux[i] > arrayAux[i+1]) 
      {
        aux = arrayAux[i];
        arrayAux[i] = arrayAux[i+1];
        arrayAux[i+1] = aux;
      }
    }
    index--;
  }
  return arrayAux;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var arrayAux = array;
  var aux = 0;
  for (var i=0; i < arrayAux.length; i++)
   {
    var j = i;
    while((arrayAux[j] < arrayAux[j-1]) && (j > 0))
      {
        aux = arrayAux[j];
        arrayAux[j] = arrayAux[j-1];
        arrayAux[j-1] = aux;
        j--; // si se hace el cambio, vuelto a la posicion anterior para 
            // para volvera verificar si el nuevo j es menos o mayor
      }
   }
   return arrayAux;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var intercambio = {
    value : 0,
    position : 0
  }
  var arrayOriginal = array;
  var arrayAux2 = array;
  var minValue = array[0];
  var aux = arrayOriginal[0];
  
  for(var j=0; j < 4; j++) 
  { 
    for(var i = j; i < array.length; i++){
        if(arrayOriginal[i] <= minValue){ 
          intercambio.value = arrayOriginal[i];
          intercambio.position = i;
          minValue = arrayOriginal[i];
        }
      }

    aux = arrayOriginal[j];
    arrayAux2[j] = (intercambio.value);
    arrayOriginal[intercambio.position] = aux;
    minValue = arrayAux2[j+1];
  }
  return arrayOriginal;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
