<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Pedidos</title>
        <link rel="stylesheet" href="estilo.css">
        <script src='script.js'></script>
    </head>
    <body class="container">
        <div class="pedidos">
            <h3>Pedidos</h3>
            <form action="ConfirmaPedido.php" method="POST">
                <label for='lbNome'><strong>Nome: </strong></label></br>
                <input type="text" id='nome' name='nome' size='23'></br></br>
                <label for='lbEndereco'><strong>Endereço: </strong></label></br>
                <input type="text" id='endereco' name='endereco' size='23'></br></br>
                <label for='lbTelefone'><strong>Telefone: </strong></label></br>
                <input type="text" id='telefone' name='telefone' size='23'></br></br>
                <label for='lbProduto'><strong>Produto: </strong></label></br>
                <select name="produto" onblur="selecionaPreco()">
                    <option value="">Selecione um produto</option>
                
                    <?php 
                        $conn = mysqli_connect("localhost", "root","", "dbDeliciousCakes");
                        $sql = "select nome, preco from produtos";
                        $result = $conn->query($sql);
                    
                        while($rows = $result->fetch_assoc()) {
                    ?>
                    <option value="<?php echo $rows['preco']; ?>">
                        <?php echo $rows['nome']; ?>
                    </option>
                    <?php } ?>
                </select><br><br>
                <label for='lbPreco'><strong>Preço: </strong></label></br>
                <input type="text" id='preco' name='preco' size='23' readonly></br></br>
                <label for='lbQuantidade'><strong>Quantidade: </strong></label></br>
                <input type="text" id='quantidade' name='quantidade' size='23' onblur="precoTotal()"></br></br>
                <label for='lbPreco_total'><strong>Preço Total: </strong></label></br>
                <input type="text" id='preco_total' name='preco_total' size='23' readonly></br></br>
                <input type="submit">
            </form>
            <script>
                function selecionaPreco() 
                {
                    let preco = (event.target.value);

                    let exibir = document.getElementById('preco')
                    exibir.value = "<?php $valor='"+preco+"';
                    echo $valor;?>";
                }
                function precoTotal() 
                {
                    let qtd = event.target;
                    qtd = parseInt(qtd.value)

                    let preco = document.getElementById('preco').value

                    if (qtd > 0) {
                    let total = qtd * preco

                    let exibir = document.getElementById('preco_total')
                    exibir.value = "<?php $valor='"+total+"';
                    echo $valor;?>";  
                    }  
                }               
            </script>
        </div>
    </body>
</html>