module.exports = function() {

	this.getBolos = function (connection, callback) {
		connection.query('SELECT * FROM produtos ORDER BY id_prod DESC', callback);
	}

	this.salvarBolo = function (nome, descricao, preco, preco_desconto, nome_imagem, connection, callback) {
		connection.query('INSERT INTO produtos set ?, ?, ?, ?, ?',
			nome, descricao, preco, preco_desconto, nome_imagem);
	}

	return this;
}