var express = require('express');
var router = express.Router();

var ToDo = require('../models/todo');

router.route('/todos')
	.post(function(req, res) {
		var toDo = new ToDo();

		toDo.taskName = req.body.taskName;
		toDo.due_date = req.body.dueDate;
		toDo.description = req.body.description;
		toDo.done = req.body.done;

		toDo.save(function(err, toDo){
			if(err){
				console.log(err);
			} else {
				res.json(toDo);
			}
		})
	})
	.get(function(req, res) {
		ToDo.find(function(err, toDos){
			if(err){
				console.log(err);
			} else {
				res.json(toDos);
			}
		})
	});

router.route('/todos/:toDo_id')
	.get(function(req, res) {
		ToDo.findById(req.params.toDo_id, function(err, toDo) {
			if(err){
				console.log(err);
			} else {
				res.json(toDo);
			}
		})	
	})
	.put(function(req, res) {
		ToDo.findById(req.params.toDo_id, function(err, toDo) {
			if(err){
				console.log(err);
			} else {
				toDo.taskName = req.body.taskName ? req.body.taskName : toDo.taskName;
				toDo.due_date = req.body.dueDate ? req.body.dueDate : toDo.due_date;
				toDo.description = req.body.description ? req.body.description : toDo.description;
				toDo.done = req.body.done ? req.body.done : toDo.done; 
				
				toDo.save(function(err){
					if(err){
						console.log(err);
					} else {
						res.json({title: "todo updated"});
					}
				})
			}
		})	
	})
	.delete(function(req, res) {
		ToDo.remove({_id :req.params.toDo_id}, function(err, toDo) {
			if(err){
				console.log(err);
			} else {
				res.json({title: "todo was deleted"});
			}
		})	
	})

module.exports = router;