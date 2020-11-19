<?php include_once "includes/head.php"; ?>    
    <body>
        <?php include_once "includes/header.php"; ?>
        <div class="container">
        <h2 id="titulo">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; Bolos &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>
        </div>
        <div id="container-categoria">
            <h3>Categorias</h3>
            <ul>
                <li onclick="exibir_todos()">Todos (17)</li>
                <li onclick="exibir_categoria('Bolos Caseiros')">Bolos Caseiros (3)</li>
                <li onclick="exibir_categoria('Bolos com Calda')">Bolos com Calda (2)</li>
                <li onclick="exibir_categoria('Bolos de Festa')">Bolos de Festa (3)</li>
                <li onclick="exibir_categoria('Bolos de Pote')">Bolos de Pote (5)</li>
                <li onclick="exibir_categoria('Bolos Funcional')">Bolos Funcional (1)</li>
                <li onclick="exibir_categoria('Cheesecakes sem Forno')">Cheesecakes sem Forno (1)</li>
                <li onclick="exibir_categoria('Rocambole')">Rocambole (2)</li>
            </ul>
        </div>
        <div id="produtos">
            <?php
                $conn = mysqli_connect("localhost", "root","", "dbDeliciousCakes");
                $sql = "select * from produtos";
                $result = $conn->query($sql);
                $produtos = [];
                if($result->num_rows > 0) {
                    while($rows = $result->fetch_assoc()) {
                        array_push($produtos, $rows)
            ?>
            <div class="box_produto" id="<?php echo $rows["descricao"] ?>" style="display:block;">
                <figure>
                    <img src="<?php echo $rows["nome_imagem"] ?>" title="<?php echo $rows["nome"] ?>" alt="<?php echo $rows["nome"] ?>" onmouseover="destaque(this)" onmouseout="destaque(this)">
                    <figcaption>
                        <label><?php echo $rows["nome"] ?></label>
                        <hr>
                        <label class="promocao">R$ <?php echo $rows["preco"] ?></label><br/>
                        <label>R$ <?php echo $rows["preco_desconto"] ?></label><br/>
                        <button class ="btnComprar" id ="btnComprar"><a href='pedidos.php'>Encomendar</a></button>
                    </figcaption>
                </figure>
            </div>
                    <?php }
                    }
                    else{
                        die ("Falha na conexão com o BD " . mysqli_connect_error());
                        } ?>
        </div>
        <?php include_once "includes/footer.php"; ?>
    </body>
</html>