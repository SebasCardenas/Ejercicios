/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: Johan Sebastian Cardenas Sanchez
 * Fecha: Septiembre 14 2018
 *
 */
 
// Prueba (No modificar)

var a = [7, 6, 5, 4, 3];
var b = [-3, -4, -5, -6, -7];
var c = [33];
function Sumar(){
if (arraySum(a) == 25 &&
    arraySum(b) == -25 &&
    arraySum(c) == 33) {
  alert('Ejercicio 1 paso la prueba!');
} else {
  alert('Ejercicio 1 no paso la prueba!');
}
}
     var arraySum = function(array) {
  var suma = 0;
  for(i=0; i< array.length; i++){
    suma += array[i];    
 }
  return suma;
};
    