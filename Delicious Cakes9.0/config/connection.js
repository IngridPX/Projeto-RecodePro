var mysql = require('mysql')

var connMySql = function() {
	
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'dbDeliciousCakes'
	})
}

module.exports = function() {
	console.log('Conexao estabelecida!')
	return connMySql
}