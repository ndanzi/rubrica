<?php
header('Access-Control-Allow-Origin: *');


$host = "localhost";
$username = "root";
$password = "\$jl08121980\$";
$dbname = "rubrica";
$connection = null;

////////////////////////////////////////////////////////////////////////

// Create connection
$connection = mysqli_connect($host, $username, $password, $dbname);
//mysql_set_charset('utf8');
ini_set('default_charset', 'utf-8');

// Check connection
if (mysqli_connect_errno($connection)) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	} else {

}
////////////////////////////////////////////////////////////////////////

$id = $_POST['id'];

mysqli_query($connection, "SET NAMES 'utf8'");
$response = mysqli_query($connection, "delete from contatto where id=$id");

print($response);
?>
