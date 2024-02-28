//Arreglos
//Contenedores para un conjunto de datos

var arreglo = new Array(5);

//console.log(arreglo);

const arreglo1 = ["Josue", 20, true];

//console.log(arreglo1);

arreglo1.forEach((valor, llave)=>{
    //console.log("En la posicion "+llave + " el valor es: "+ valor);
});

for(let i=0; i<arreglo1.length; i++){
    //console.log("En la posicion "+i + " el valor es: "+ arreglo1[i]);
}

let tabla = [];

for (let i = 1; i < 11; i++) {
    tabla.push((5*i));
}

console.log(tabla);

tabla.unshift("TABLA DEL 5");

console.log(tabla);

tabla.shift();

console.log(tabla);

tabla.pop();

console.log(tabla);

console.log(tabla.length);

let arreglo_a = [1, 2, 3];
let arreglo_b = [4, 5, 6];

let arreglo_c = arreglo_a.concat(arreglo_b, [7,8,9]);
console.log(arreglo_c);

let saludo = ["hola", "estudiantes", "de", "ingenieria"];

let union = saludo.join(" ");

console.log(union);

let separacion = union.split(" ");
console.log(separacion);

let reversa = arreglo_c.reverse();
console.log(reversa);


//objetos json
//javascript object notation
//son cadenas - utiles cuando se quiere transmitir datos por red. 
//deben ser convertidas a un objeto nativo de javascript

var curso = {
    titulo: "javascript",
    "catedratico": "Ing. Mejía"
}

console.log(curso.catedratico);
