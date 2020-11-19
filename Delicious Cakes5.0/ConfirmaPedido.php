<?php
                $conn = mysqli_connect("localhost", "root","", "dbDeliciousCakes");
                if(!$conn){
                    die ("Falha na conexão com o BD " . mysqli_connect_error());
                }
                else{
                    echo "Pedido enviado com sucesso! Agradecemos a preferência";
                    $nome = ($_POST['nome']);
                    $endereco = ($_POST['endereco']);
                    $telefone = ($_POST['telefone']);
                    $preco = ($_POST['preco']);
                    $quantidade = ($_POST['quantidade']);
                    $preco_total = ($_POST['preco_total']);

                    $sql = "Insert into pedidos () values ('$nome','$endereco','$telefone','$preco','$quantidade','$preco_total')";
                    mysqli_query($conn, $sql);
                }
                
                       
 ?>