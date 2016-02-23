var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
 	taskName: String,
  	due_date: String, 
  	description: String,
  	done: String, 
 });

module.exports = mongoose.model('Todo', ToDoSchema);
