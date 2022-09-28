

# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // 8 , 9 , 10
  var x = 10;
  console.log(x); // ---> 10
  console.log(a); // ---> 8
  var f = function(a, b, c) { // 8, 9, 10
    b = a; // 8
    console.log(b); // ---> 8
    b = c; //  10
    var x = 5; //5 
  }
  f(a,b,c);
  console.log(b); // ---> 9  (me viene como parametro en la funcion = c)
}
c(8,9,10); 
console.log(b); // ---> 10
console.log(x); // ---> 1  primero se definen las variables y por eso x=1 
               //          es valido como primera linea aunque no es lo ideal
```

```javascript
console.log(bar); // ---> undefinen (porque la variable existe declarada pero no llego a adquirir valor)
console.log(baz); // ---> error undefined ( en ningun momento se declara la variable, a diferencia de bar)
foo(); // ---> Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // ---> franco porque true siempre entra en el if y modificar el valor
```

```javascript
var instructor = "Tony";
console.log(instructor); // ---> tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // ---> franco
   }
})();
console.log(instructor); // ---> tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);// ---> the flash
    console.log(pm);// ---> reverse flash
}
console.log(instructor);// ---> the flash 
console.log(pm);// ---> franco let solo permite la existencia de la variable en 1 entorno de ejecucion.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5  // $45 concatena los caracteres 
"4" - 2 // 2
"4px" - 2 // nan no puede restar 2 a un nan
7 / 0 // supongo que tira error o que no se puede dividir por zedro
{}[0] // arreglo [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] //23
3>2>1 // false porque 1 no es mayor que 2 y 2 no es mayor que 3
[] == ![] // true porque nan == !nan.. osea es lo mismo jaja
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // ---> undefine
   console.log(foo()); // ---> 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefinen y 2 porque a esta definida pero se le asigna un valor posteriormente, encambio foo retorna un valor (la fusion se declara entera)
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // ---> undefinen porque en getfood existe la var snak pero al no entrar
                  //     al if sigue undefinened y como food=false retorna undefinen
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // ---> 'Aurelio De Rosa' un objeto dentro de otro objeto, el objeto ??

var test = obj.prop.getFullname;

console.log(test()); // ---> 'Juan Perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // ---> 1 
            // ---> 4 porque no es un webapi(los otros anteriores los mando a la webapi) 
            // ---> 3 es el primer valor en cola callback queue
            // ---> 2 es el segundo valor en cola callback queue
```