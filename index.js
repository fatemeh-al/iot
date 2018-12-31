// const cool = require('cool-ascii-faces')
// const express = require('express')
// const path = require('path')
// var cors = require('cors')
// const PORT = process.env.PORT || 5000

// var app = express();

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('test', (req, res) => res.send('Hello world'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var cors = require('cors')
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(bodyparser.json())
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/test', function(req, res){
	res.send('tesssssst')
});

app.post('/signup', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	console.log("success");
	res.send(`someone logged in`);
});
 
app.listen(PORT);
