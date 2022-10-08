"use strict";

const { hasEmbeddedError } = require("@11ty/eleventy/src/EleventyErrorUtil");
const henryReadingTime = require("henry-reading-time");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular 
    de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor 
  coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback,
   retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(data) {
  var nod = new Node(data);
  var current = this.head; // donde apunta la lista al 1er nodo
  // si la lista esta vacia
  if(current === null){
    this.head = nod;
    this._length++;
    return nod;
  }
  // si la lista no esta vacia, la recorro hasta encontrar el ultimo nodo que apunta a null
  while(current.next){
    current = current.next;
  }
  // entonces al .next del ultimo nodo le asigno el nodo nuevo
  current.next = nod;
  this._length++;
  return nod;

}

LinkedList.prototype.remove = function(){
  //var node = new Node(data);
  var current = this.head;
  
  if(this.head === null){
    return null;
  }
  if(current.next === null){
    this.head = null;
    return current.value;
  }
  while(current.next.next){
    current = current.next
  }
  // se aguarda el ultimo elemento
  var current1 = current.next;
  // se borra el ultimo elemento
  current.next = null;
  return current1.value;

  
}

/*
- search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor 
  coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback,
   retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
LinkedList.prototype.search = function(data){
  var current = this.head;

  if(!current){ //si no existen nodos en la lista(head) retrono null
    return null;
  } 

  while(current){
    //recibo una funcion
    if(typeof data === "function"){
      if(data(current.value)){ // el callback "data" le paso el valor del nodo actual para 
        return current.value;  // que me devuelda un boo que si es true retorna el valor del nodo
      }
    }
    //recibo un valor
    if(current.value === data){ 
      return current.value;
    }
    current = current.next;
  }
  // si no encuentra el valor, retorno null porque no existe
  return null;
    
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones 
  posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la
   clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código
   numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total
    por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.

  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey,
  si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
  se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.arreglo = [];
}

HashTable.prototype.hash = function (data) { 
  var codigo = 0;
  for(var i=0; i < data.length; i++){
    codigo = codigo + data.charCodeAt(i);
  }
  return codigo % this.numBuckets;
} 

/*- set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.*/
HashTable.prototype.set = function (key, value) { 
  if(typeof key !== "string"){
    throw TypeError('Keys must be strings');
    } 

  var objeto = {}
  objeto[key] = value;
  var indice = this.hash(key) // creo el hash para de la key para el indice

  if(!this.arreglo[indice]){  //si no existe nada en la posicion del arreglo, agrego el nuevo objeto
    this.arreglo[indice] = objeto;
  }
  this.arreglo[indice][key]= value;  // y si existe algo, le sumo unas nuevas key:value;
  
  
  //return TypeError('Keys must be strings');
}

//- get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
HashTable.prototype.get = function (key, value) { 
  var indice = this.hash(key)
  return this.arreglo[indice][key]; // arreglo del hashtable, el indice del arreglo y el valor de la key a buscar
}

//- hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
HashTable.prototype.hasKey = function (key) { 
  var indice = this.hash(key)
  if(this.arreglo[indice][key]!== undefined)
    return true;
  else return false;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
