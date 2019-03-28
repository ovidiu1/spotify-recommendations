const express = require('express');
const app = express();

app.use(express.static('build'));
// app.use(express.static(__dirname + './build'));
// app.set('DEV_PORT', envs('PORT'));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname+'build/index.html'));
  });

app.use(function(err, req, res,next){
    console.log(err);
    res.status(422).send({error: err.message});
});

 const PORT = process.env.PORT;
// const PORT = 8080;
// console.log("app listen on PORT", PORT)
 app.listen(PORT);