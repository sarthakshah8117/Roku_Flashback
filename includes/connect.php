<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'portfolio_content',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'sarthakshah81173';
    $db_pass = 'Kushalshah2696@'; // windows users leave this blank

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }