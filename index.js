//BUCLES

//FOR
//for(inicializacion; condicion; iteracion){//code}
/*
for(let i=0; i<10; i++){
    console.log("valor de I:" + i);
}

//NAN = Not A Number
let numero = prompt("¿Qué número quieres iterar?");
for (let i = 1; i <11; i++) {
    console.log(numero + " X " + i + " = " + (numero*i));    
}*/

$(document).ready(function () {
    $("#btn_enviar").click(()=>{
        //let param = $("#numero").val();
       // iterar($("#numero").val());
    })
});
/*
function iterar(numero){
    for (let i = 1; i <11; i++) {
        if(i == 5){
            continue;
        }
        console.log(numero + " X " + i + " = " + (numero*i));    
    }
}*/

let dias = ["Lunes", "martes", "miercoles", "Jueves", "viernes"];
/*
for (let i = 0; i < dias.length; i++) {
    console.log("valor de la posicion "+ i + " = " +dias[i]);
}*/

//for in
for(i in dias){
    console.log("valor de la posicion "+ i + " = " +dias[i]);
}
//for of
for(let dia of dias){
    console.log(dia);
}

console.log('foreach');
dias.forEach((dia, index)=>{
    console.log("valor de la posicion "+ index + " = " +dia);
});

//WHILE
let x = 10;
let tope = 10;
while(x < tope){
    console.log("valor de x = " + x);
    x++;
}

do{
    console.log("valor de x = " + x);
    x++;
}while(x<10);

console.log('prueba con el equipo');