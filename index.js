const express = require('express');

const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url ==='/signup'){
        responseObject.send('<h1>Welcome to signup page </h1>');
        

    }else if (url === '/login'){
        responseObject.send('<h2>login page');
       
    }else if(url === '/contacts'){
        responseObject.send('contact page');
       
    }else if(url === '/'){
        responseObject.send('homePage');
      

    }else {
        responseObject.send('404 page not found');
       
    }
};
const handleGetLogin = (reg, res) => {
    res.send('This is login get');
};

const handleLoginPot =(req, res) => {
    res.send('This is login put');
};

const handleLoginDelete =(req, res) => {
    res.send('This is login delete');
};

const handleLoginPut =(req, res) => {
    res.send('This is login delete');
}
// const server = http.createServer(handleAllRequest);
const server = express()
// server.use(handleAllRequest)

server.get('/login',handleGetLogin);
server.put('/login',handleLoginPut);
server.delete('/login',handleLoginDelete);
server.post('/login',handleLoginPot);

server.listen(3000, '127.0.0.1', () =>{
    console.log('server is running ')
})






