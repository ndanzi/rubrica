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

mysqli_query($connection, "SET NAMES 'utf8'");
$result = mysqli_query($connection, "SELECT * FROM contatto");
$list = array();

while ($row = mysqli_fetch_array($result)) {
  $list[] = $row;
}
$json = json_encode($list);
header('Content-Type: application/json');
print($json);


?>
