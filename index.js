$(document).ready(function () {
    $("#btn_enviar").click(()=>{
        guardar_json();
    });
});

function guardar_json(){
    let mi_json = {
        nombre: $("#nombre").val(),
        apellido: $("#apellido").val(),
        fecha: $("#fecha").val(),
        profesion: $("#profesion").val()
    }

    console.log("Hola, mi nombre es " + mi_json.nombre + " " + mi_json.apellido +"\n"+
        "Mi fecha de nacimiento es " + mi_json.fecha + " y mi profesión es " + mi_json.profesion
    );

    mi_json.saludo = prompt("Saluda de manera unica");

    console.log(mi_json.saludo)

    delete mi_json.saludo;
    console.log(mi_json);
};