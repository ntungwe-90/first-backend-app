const http = require('http');

const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url ==='/signup'){
        responseObject.write('<h1>Welcome to signup page </h1>');
        responseObject.end();

    }else if (url === '/login'){
        responseObject.write('<h2>login page');
        responseObject.end();
    }else if(url === '/contacts'){
        responseObject.write('contact page');
        responseObject.end();

    }else if(url === '/'){
        responseObject.write('homePage');
        responseObject.end();

    }else {
        responseObject.write('404 page not found');
        responseObject.end();
    }
};

const server = http.createServer(handleAllRequest);

server.listen(3000, '127.0.0.1', () =>{
    console.log('server is running ')
})






