const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async')
const app = http.createServer((req, res) => {
	const url = req.url;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	if(url ==='/'){
		res.write('Hello Holberton School!');}
	if(url ==='/students') {
		countStudents(process.argv[2])
		.then((output)=>{
			res.write(output)
		})
	}
	res.end();
});
app.listen(1245, '127.0.0.1');
module.exports = app;
