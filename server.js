

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
  req(request.params['0'], (err, res, body) => {
    console.log(res);

    // res.pipe(response);
    response.send(res.body);
  });

});


app.listen(port, () => console.log(`Express server listening on port ${port}`));
