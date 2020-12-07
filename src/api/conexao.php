<?php
function query($sql) {
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "dbDeliciousCakes";

    $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
    $resultado = mysqli_query($connect, $sql);
    mysqli_close($connect);
    return $resultado;
}
    $result = query("SELECT produtos.nome, produtos.descricao, produtos.nome_imagem, precos.preco, precos.preco_desconto
    FROM produtos JOIN precos ON produtos.id_prod = precos.id_preco;");
    $produtos = [];
    
    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application / json");
    echo json_encode($produtos);
?>