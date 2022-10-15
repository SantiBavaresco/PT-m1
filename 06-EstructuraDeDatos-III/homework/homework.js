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
BinarySearchTree.prototype.size2 = function(s){
  // - size: retorna la cantidad total de nodos del árbol
  //var raiz = this;
  if (this.left===null && this.right===null) return 1;
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();
    return 1 +  this.left.size() + this.right.size ();
}

BinarySearchTree.prototype.contains = function(data){
  // - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  //var raiz = this;
  //this.s++;
    if(this.value === data){ return true; }

    if(this.value < data) { 
      if(this.right === null) {
        return false;
      }
      else{
         return this.right.contains(data);
      }
    }

    if(this.value > data) { 
      if(this.left === null) {
        return false;
      }
      else{
        return this.left.contains(data);
      }
    }
 
}  
  

BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
  // - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de 
  // sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  // Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  switch (order) {
    case "in-order" : {
        if (this.left) 
          this.left.depthFirstForEach(cb,order);
        cb(this.value);
        if (this.right) 
          this.right.depthFirstForEach(cb,order);
      break;
    }
    case "pre-order":{
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb,order);
      if (this.right) this.right.depthFirstForEach(cb,order);
    break;
    }
    case "post-order":{
      if (this.left) this.left.depthFirstForEach(cb,order);
      if (this.right) this.right.depthFirstForEach(cb,order);
      cb(this.value);
      break;
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,queue =[]){
  //  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  if (this.left) 
    queue.push(this.left);
  if (this.right) 
    queue.push(this.right);
  cb(this.value)
  if (queue.length){
    queue.shift().breadthFirstForEach(cb,queue);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
