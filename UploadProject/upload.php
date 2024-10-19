<?php 
header("Access-Control-Allow-Origin: *");
echo json_encode($_FILES  , JSON_PRETTY_PRINT);