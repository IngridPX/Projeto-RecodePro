module.exports = function(app) {

	app.get('/bolos', function (req, res) {

		var connection = app.app.config.connection()
		
		var query = app.app.models.conteudoModel 
		query.getBolos(connection, function(error, results, fields) {
			console.log(error, results);
			res.render('bolos', {dados : results});
		});
	});
}