

const express = require('express');
const app = express();
const path = require('path');
const req = require('request');


app.use(express.static(`${__dirname}`));


app.get('/*', (request, response) => {
  req(request.params['0'], (err, res, body) => {
    // console.log(res.body);


    response.send(res.body);
  });

});


app.listen(process.env.PORT || 3001, "0.0.0.0");
