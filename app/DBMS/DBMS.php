<?php
class DBMS {

    private $host = "localhost";
    private $username = "root";
    private $password = "$jl08121980$";
    private $dbname = "rubrica";
    private $connection = null;

    function __construct() {
        // Create connection
        $this->connection = mysqli_connect($this->host, $this->username, $this->password, $this->dbname);

// Check connection
        if (mysqli_connect_errno($this->connection)) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } else {

        }
    }


}

?>
