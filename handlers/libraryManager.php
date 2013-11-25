<?php

    require_once "../classes/Library.php";

    $obj = new Library();

    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
            $id = explode("book/", $_SERVER['REQUEST_URI']);
            if (isset($id[1])){
                /*
                Query the database to get the information
                about the book with ID = $id[1]
                */
                $result = $obj->get_book_by_id($id[1]);
            }  else {
                /*
                Query the database to get the information
                about all the books
                */
                $result = $obj->get_books();

            }
            break;

        case "POST":
            // Save a new record in the database
            $result = $obj->register_new_book($_POST);
            break;

        case "PUT":
            // Retrieve additional data
            $d = json_decode(file_get_contents("php://input"), false);
            $result = $obj->loan_book($d);
            break;

        case "DELETE":
            $id = explode("book/", $_SERVER['REQUEST_URI']);
            if (isset($id[1])){
                $result = $obj->delete_book($id[1]);
            }
            break;
    }

    $json = json_encode($result);
    echo $json;

    return;

?>