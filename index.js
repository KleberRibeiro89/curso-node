const http = require('http')
const url = require('url')

http.createServer((request, response) => {
    if (request.method === 'POST') {
        response.write('hello wolrd 22!');
    }

    const parsedUrl = url.parse(request.url, true);
    const queryParams = parsedUrl.query;
    const queryParamspathName = parsedUrl.pathname;

    if (queryParamspathName === '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }

    
    if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        console.log(queryParams);

        response.write('hello wolrd 2 get!\r\n');
        response.write(`O parâmetro é: ${queryParams.id}`);

    }
    response.end();

}).listen(3000);

