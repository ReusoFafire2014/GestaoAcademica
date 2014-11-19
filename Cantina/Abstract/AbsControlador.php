<?php  
header('Content-Type: application/json');
include "../controladores/contolador_categoria.php";

echo (getCategorias()); 

exit();
?>