// MOCKUP API JSON OBJECT
 {
 	"taskName": "task",
  	"id": 1, 
  	"due_date": date, 
  	"description": "the cool cats", 
  	"done": true 
 }
//MOCK API TODO
{
	"GET /todos": 
	{ 
		"desc": "returns all tasks", 
		"response": "200 application/json",
		"data": [{}, {}, {}] 
	},
}
{
	"GET /todos/:_id": 
	{ 
		"desc": "returns task by id", 
		"response": "200 application/json",
		"data": {} 
	},
}

{
	"POST /todos": 
	{ 
		"desc": "creates and returns new task", 
		"response": "200 application/json",
		"data": [{}, {}, {}] 
	},
}
{
	"PUT /todos/_id": 
	{ 
		"desc": "updates and returns all tasks", 
		"response": "200 application/json",
		"data": [{}, {}, {}] 
	},
}
{
	"DELETE /todos_id": 
	{ 
		"desc": "deletes tasks by id", 
		"response": "200 application/json",
		"data": [{}, {}, {}] 
	},
}
