const http = require('http');
const app = http.createServer((req, res) => {
	res.end('Hello Holberton School!');
});
app.listen(1245, '127.0.0.1');
