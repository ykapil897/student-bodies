const http = require('http');
const fs = require('fs');
const path = require("path");

path.join(__dirname, "/css");
console.log(__dirname);
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('C:/web development/practice/student bodies/html/home.html')
const ss = fs.readFileSync('C:/web development/practice/student bodies/html/ss.html')
const sac = fs.readFileSync('C:/web development/practice/student bodies/html/sac.html')
const feedback = fs.readFileSync('C:/web development/practice/student bodies/html/feedback.html')
const acac = fs.readFileSync('C:/web development/practice/student bodies/html/acac.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/ss'){
        res.end(ss);
    }
    else if(url == '/sac'){
        res.end(sac);
    }
    else if(url=="/acac") {
        res.end(acac);
    }
    else if(url == '/feedback'){
        res.end(feedback);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
