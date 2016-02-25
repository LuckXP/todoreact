var TodoList = React.createClass({
    render: function() {
        var self = this;
        var todosList = this.props.allMyData.map(
            function(t) {
                return (
                    <div className="panel panel-default pad">
                        <div className="panel-header pad">
                            <h3> {t.taskName} </h3>
                        </div>
                        <div className="panel-body">     
                            <p> {t.due_date} </p>
                        </div>
                        <div className="panel-body">     
                            <p> {t.description} </p>
                        </div>
                        <div className="panel-footer">
                            <p> {t.done} </p>
                            <button type="button" className="btn btn-danger" onClick={self.props.handleDelete.bind(this, t._id)}>Delete</button>
                        </div>
                    </div>
                    )
            })
                return (
                    <div>
                      {todosList}
                    </div>
            )
    }

});

var TodoForm = React.createClass({
    getInitialState : function() {
        return {
            taskName: '',
            due_date: '', 
            description: '',
            done: '', 

        }
    },
    handleNameChange: function(e) {
        this.setState({
            taskName: e.target.value,
        })
    },
     handleDateChange: function(e) {
        this.setState({
            due_date: e.target.value, 
        })
    },
     handleDescriptonChange: function(e) {
        this.setState({ 
            description: e.target.value,
        })
    },
     handleDoneChange: function(e) {
        this.setState({
            done: e.target.value, 
        })
    },
    
    handleForm: function(e) {
        e.preventDefault();
        var taskName = this.state.taskName;
        var due_date = this.state.due_date;
        var description = this.state.description;
        var done = this.state.done;      
        this.props.handleSubmit({
            taskName: taskName,
            due_date: due_date, 
            description: description,
            done: done, 
        });
    },
    render: function() {
        var self = this;
                return (
                        <div className="container">
                            <form onSubmit={this.handleForm} className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <legend>Add New Tasks</legend>
                                    </div>
                                    <div className="form-group">
                                        <label>New Task Name</label>
                                        <input onChange={this.handleNameChange} value={this.state.taskName} type="text" className="form-control" placeholder="task name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Due Date</label>
                                        <input onChange={this.handleDateChange} value={this.state.due_date} type="text" className="form-control" placeholder="due date"/>
                                    </div>                  
                                    <div className="form-group">
                                        <label>description</label>
                                        <input onChange={this.handleDescriptonChange} value={this.state.description} type="text" className="form-control"  placeholder="description"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Done?</label>
                                        <input onChange={this.handleDoneChange} value={this.state.done} type="text" className="form-control" placeholder="done?"/>
                                    </div> 
                                    <div className="form-group">
                                        <div className="col-sm-10 col-sm-offset-2">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    )
            }
});

var App = React.createClass({
    
    getInitialState: function () {
        return{
            todos: [],
        }
    },

    loadTodosFromServer: function() {
        var self = this;
        $.ajax({
            url: '/api/todos',
            method: 'GET',
        }).done(function(data) {
            self.setState({
                todos: data,
            })
        });
    },

    handleSubmit: function(todo){
         var self = this;
         $.ajax({
            url: '/api/todos',
            method: 'POST',
            data: todo,
        }).done(function() {
            self.loadTodosFromServer();
            console.log('posted todo to server')
        })
    },

    handleDelete: function(id) {
        var self = this;
        var id = id;
        $.ajax({
            url: '/api/todos/' + id,
            method: 'DELETE',
        }).done(function(){
            return self.loadTodosFromServer();

        })
    },
    
    componentDidMount: function() {
        this.loadTodosFromServer();
    },

    render: function() {
        return (
            <div>
                <h3> Hello World </h3>
                <TodoList handleDelete={this.handleDelete} allMyData={ this.state.todos }/>
                <TodoForm handleSubmit={this.handleSubmit}/>
            </div>
            )
    },

});

React.render(<App/>, document.getElementById('app'));