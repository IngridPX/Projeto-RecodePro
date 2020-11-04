<?php
    // Conexão com o banco de dados
    $link = mysqli_connect("localhost", "root","", "dbDeliciousCakes");
    if (!$link)
        die ("Falha na conexão com o BD " . mysqli_connect_error());
    else
        echo "Sucesso: Sucesso ao conectar-se com a base de dados MySQL.";
        $categoria = ($_POST['categoria']);
        $nome = ($_POST['Nome']);
        $sobrenome = ($_POST['Sobrenome']);
        $telefone = ($_POST['Telefone']);
        $email = ($_POST['Email']);
        $descricao = ($_POST['descricao']);
    $insere = "Insert into recado ()
    Values ('$categoria','$nome','$sobrenome','$telefone','$email','$descricao')";
    mysqli_query ($link, $insere);
    mysqli_close();
?>