const http = require('http')

http.createServer((request, response) => {
    response.write('hello wolrd 2!');
    response.end();
}).listen(3000);

