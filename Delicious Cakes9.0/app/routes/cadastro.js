module.exports = function(app) {

    app.get('/cadastro', function (req, res) {
		res.render('cadastro')
})

    var multer = require('multer')

    var storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, 'Imagens')
        },
        filename: function (req, file, callback) {
            callback(null, Date.now() + file.originalname)
        }
    })

    var upload = multer({storage: storage})
    
    app.post('/cadastro/salvar', upload.single("file"), function (req, res) {

      var nome = req.body.nome;
      var descricao = req.body.descricao;
      var preco = req.body.preco;
      var preco_desconto = req.body.preco_desconto;
      var nome_imagem = '../Imagens/' + req.file.filename
      nome_imagem = nome_imagem.toString();
      
      var connection = app.app.config.connection();

      var conteudoModel = app.app.models.conteudoModel;
        
      conteudoModel.salvarBolo(nome, descricao, preco, preco_desconto, nome_imagem, connection, function(error, result) {
        res.redirect('/bolos')
		  });  
    })
}