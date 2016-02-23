var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/tododb');

var toDoRouter = require('./routes/todos');
var ToDo = require('./models/todo')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index', {title: 'show this ugly title object'});
});


app.get('/todos', function(req, res) {
	ToDo.find(function(err, todos){
		if(err){
			console.log(err);
		} else {
			res.render('todos', {todos: todos});
		}
	})
});

var port = process.env.PORT || 7070;

var router = express.Router();

router.use(function(req, res, next) {
	console.log("the server is doing something")
	next();
});

app.use('/api', toDoRouter);

app.listen(port);
console.log('👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹\n💀 Magic happens on port ' + port +'💀\n👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹');
