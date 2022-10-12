"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.s = 1;
  this.left = null;
  this.right = null;

}
BinarySearchTree.prototype.insert = function(nuevo,raiz){
  // - insert: agrega un nodo en el lugar correspondiente
  var raiz = this;
  this.s++;

  if(this.value < nuevo) { 
    if(this.right === null) {
      this.right = new BinarySearchTree(nuevo);
    }
    else{
        this.right.insert(nuevo,raiz);
    }
  }
  if(this.value > nuevo){
    if(this.left === null) {
      this.left = new BinarySearchTree(nuevo);
    }
    else{
        this.left.insert(nuevo,raiz);
    }
  }
  return this;
}

BinarySearchTree.prototype.size = function(s){
  // - size: retorna la cantidad total de nodos del árbol
  //var raiz = this;
  return this.s;
    
  
  
}

BinarySearchTree.prototype.contains = function(data,raiz){
  // - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  var raiz = this;
  //this.s++;
  if(this.value === data){
    return true;
  }
  else { 
    if(this.value < data) { 
      if(this.right === null) {
        //this.right = new BinarySearchTree(nuevo);
        return false;
      }
      else{
          this.right.contains(data,raiz);
      }
    }
    if(this.value > data) { 
      if(this.left === null) {
        //this.right = new BinarySearchTree(nuevo);
        return false;
      }
      else{
          this.left.contains(data,raiz);
      }
    }
 }
  //return this;
}

BinarySearchTree.prototype.depthFirstForEach = function(){
  // - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de 
  // sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  // Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
}

BinarySearchTree.prototype.breadthFirstForEach = function(){
  //  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
