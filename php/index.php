<?php

    $nombre = 'Josue';
    $apellido = 'Mejia';

    echo "Mi nombre es: <b style='color: red;'>$nombre</b>";
    //print($nombre);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label>Hola mi nombre es: <?php echo $nombre; ?></label>
</body>
</html>

<?php 

    unset($nombre, $apellido);
    //echo $nombre; 

    $nombre = 'Andres';
    echo "<br>";

    if($nombre == "Josue"){
        echo "Ya es Ingeniero";
    }elseif($nombre == "Cristian"){
        echo "<b style='color: red;'>YA CASI ES INGENIERO</b>";
    }else{
        echo "<b style='color: orange;'>NO ES INGENIERO</b>";
    }

    echo "<br>";
    $mensaje = (($nombre == 'Josue') ? "Ya es ingeniero" : (($nombre == "Cristian") ? "Ya casi es ingeniero" :"No es ingeniero"));

    echo $mensaje;

    switch($nombre){
        case "Josue":
            echo "Ya es ingeniero";
            break;
        case "Andres":
        case "Cristian":
            echo "Ya casi es ingeniero";
            break;
        default:
            echo "No es ingeniero";
            break;
    } 
?>