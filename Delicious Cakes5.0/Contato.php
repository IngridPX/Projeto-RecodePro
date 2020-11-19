<?php include_once "includes/head.php"; ?>    
    <body>
        <?php include_once "includes/header.php"; ?>
        <div class="container">
        <h2 id="titulo">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; Contatos &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</h2>
        <div class="titulo-contato">
            <strong>Central de Vendas</strong>
            <div class="contato">
                <img src="imagens/telefone.png" title="Telefone" alt="Telefone">  (11)5437-8859<br/><br/>
                <img src="imagens/whatsapp.png" title="whatsapp" alt="whatsapp">  (11)96578-8759<br/><br/>
                <img src="imagens/o-email.png" title="Email" alt="Email">  
                <a href="mailto:atendimento@deliciouscakes.com">atendimento@deliciouscakes.com</a>
            </div>
        </div>
        <div class="titulo-msg">
            <strong>Deixe seu Recado</strong>
            <div class="msg">
                <p>Deixe aqui sua dúvida, elogio, sugestão ou crítica. Sua opinião é muito importante para nós.</p>
                <div style="text-align:left">
                    <form action="formulario.php" method="POST">
                        <label for='lbCategoria'><strong>Categoria: </strong></label><br/>
                        <select id="categoria" name="categoria" width='10'>
                            <option value="Crítica"> Crítica </option>
                            <option value="Dúvida"> Dúvida </option>
                            <option value="Elogio"> Elogio </option>
                            <option value="Sugestão"> Sugestão </option>
                        </select><br/><br/>
                        <label for='lbNome'><strong>Nome: </strong></label>
                        <label for='lbSobrenome' class="espacamento"><strong>Sobrenome: </strong></label></br>
                        <input type="text" id='nome' name='Nome' size='14'>
                        <input type="text" id='sobrenome' name='Sobrenome' size='14'><br/><br/>
                        <label for='lbTelefone'><strong>Telefone: </strong></label><br/>
                        <input type="text" id='telefone' name='Telefone' size='34'><br/><br/>
                        <label for='lbEmail'><strong>E-mail: </strong></label><br/>
                        <input type="email" id='email' name='Email' size='34'><br/><br/>
                        <label for='lbDescricao'><strong>Descrição: </strong></label><br/>
                        <textarea id="descricao" name="descricao" rows="5" cols="37"></textarea><br/><br/>
                        <input type="submit" class="btn">
                    </form>
                </div>
            </div>
        </div>
</div>
        <?php include_once "includes/footer.php"; ?>
    </body>
</html>