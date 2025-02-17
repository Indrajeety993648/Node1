// const fs = require('fs');

// fs.writeFile('shm1.txt', 'Hello World!', 'utf8', (err) => {
//   if (err) {
//     return console.error(`A problem occurred: ${err.message}`);
//   }
//   console.log('File has been created successfully!');
// });


// const fs = require('fs');

// const content = '\nThis is the appended content.';

// fs.appendFile('shm1.txt', content, 'utf8', (err) => {
//   if (err) {
//     return console.error(`A problem occurred: ${err.message}`);
//   }
//   console.log('Content has been appended successfully!');
// });


// Rename the file 

// const fs = require('fs');
// const oldPath = 'shm1.txt';
// const newPath = ' shm2.txt';

// fs.rename(oldPath , newPath
//   ,(err) =>{
//     if(err){
//       return console.error (`A proble occured : {err.message}`)
//     }
//     console.log('file has been renamed successfully !')
//   });


// const p = '/home/indrajeetyadav/Desktop/Node1/shm2.txt';
// const path = require('path'); 

// const dirname = path.dirname(p); 
// const extension = path.extname(p);

// console.log(dirname);
// console.log(extension);


// cpoying data from  one file to another file 

// const fs = require('fs');
// const path = require('path');

// const filepath = path.join(__dirname , 'shm2.txt');
// const filepath2 = path.join(__dirname , 'newfile.txt');


// fs.copyFile(filepath, filepath2, (err) => {
//   if (err) {
//     return console.error(`Error copying file: ${err.message}`);
//   }
//   console.log('File copied successfully!');
// });



// const http = require('http');
//  const server = http.createServer((req , res) => {
//     res.setHeader('Content _Type' , 'text/html');

//     res.write('<html> <head>')
//  }) 

// Server 

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/login') {
        const filepath = path.join(__dirname, 'index.html');
        try {
            const content = fs.readFileSync(filepath, 'utf8');
            res.write(content);
        } catch (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Internal Server Error');
        }
    } else {
        res.write('<html> <head> <title>My First Page</title> </head> <body> <h1>Hello World!</h1> </body> </html>');
    }
    res.end();
});

const port = 3004;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});