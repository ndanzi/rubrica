<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of contattoBean
 *
 * @author Nicolò
 */
class contattoBean {

    private $fields = array();

    function __construct() {
        $this->fields['id'] = null;
        $this->fields['nome'] = null;
        $this->fields['cognome'] = null;
        $this->fields['telefono'] = null;
        $this->fields['email'] = null;
        $this->fields['ufficio'] = null;
        $this->fields['gruppo'] = null;
    }

    function __call($method, $args) {
        if (preg_match("/set_(.*)/", $method, $found)) {
            if (array_key_exists($found[1], $this->fields)) {
                $this->fields[$found[1]] = $args[0];
                return true;
            } else {
                return false;
            }
        } else if (preg_match("/get_(.*)/", $method, $found)) {
            if (array_key_exists($found[1], $this->fields)) {
                return $this->fields[$found[1]];
            } else {
                return false;
            }
        }
        return false;
    }

}

?>
