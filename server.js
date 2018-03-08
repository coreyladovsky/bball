// const express = require('express');
// const app = express();
// var path = require('path');
//

// app.get('/:url', (request, response) => {
//   response.send("success" + request.params.url);
//   // request.params.url
// });
// app.listen(3000, console.log("express running"));


const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const port = process.env.PORT || 3001;
// https://stackoverflow.com/a/37632484/3106398
const req = require('request');


app.use(express.static(`${__dirname}`));

app.get("/", (request, response) => {

  response.sendFile(path.resolve(`${__dirname}/index.html`));
});

app.get('/*', (request, response) => {
  console.log(request.params['0']);
  req(request.params['0'], (err, res, body) => {
    console.log(res);

    // res.pipe(response);
    response.send(res.body);
  });
  // request.params.url
});

// app.post('/', (request, response) => {
//   console.log(request.params);
//
//   response.send("success" + request.params);
// });


app.listen(port, () => console.log(`Express server listening on port ${port}`));
