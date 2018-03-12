

const express = require('express');
const app = express();
const path = require('path');
const req = require('request');
var port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3001");
});

app.use(express.static(`${__dirname}`));


app.get('/*', (request, response) => {
  req(request.params['0'], (err, res, body) => {
    // console.log(res.body);


    response.send(res.body);
  });

});
