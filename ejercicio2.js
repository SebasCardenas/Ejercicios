/*
 *
 * Ejercicio 2: Dado un arreglo de personas, retorne el color de cabello de la personaa mas edad.
 *
 * Una persona es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 *
 * Autor:Johan Sebastian Cardenas
 * Fecha: Septiembre 14 del 2018
 *
 */

  var colorCabello = function(personas) {
     var cabello = "";
     var MayorEdad = 0;
  
  for(i=0; i< personas.length; i++){
    if(personas[i].edad > MayorEdad){
      
      cabello =personas[i].colorCabello;
      MayorEdad = personas[i].edad
    }
     
  }

  return cabello;
};

// Prueba (No modificar)

var persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
var persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
var persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};
var persona4 = {
  nombres: 'Rick',
  apellidos: '-',
  edad: 105,
  colorCabello: 'Azul'
};

var personas1 = [persona1];
var personas2 = [persona1, persona3];
var personas3 = [persona1, persona2, persona3];
var personas4 = [persona3, persona4];
function Edad(){
if (colorCabello(personas1) === 'Rubio' &&
    colorCabello(personas2) === 'Rubio' &&
    colorCabello(personas3) === 'Cafe Oscuro' &&
	colorCabello(personas4) === 'Azul') {
  alert('Ejercicio 2 paso el test!');
} else {
  alert('Ejercicio 2 no paso el test!');
}
}