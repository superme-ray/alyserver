var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/redux', function (req, res, next) {
	return new Promise(function (resolve, reject) {
		return request({
			uri: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET',
			json: true,
		}, function (err, response, body) {
			if (err) reject(err);
			resolve(body);
		})
	}).then(function (data) {
		res.json({code: 200, message: 'ok', error: false, data: data})
	}).catch(function (err) {
		console.log(err);
		next(err);
	})
});

module.exports = router;

