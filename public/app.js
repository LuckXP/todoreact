var TodoList = React.createClass({
    render: function() {
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

var App = React.createClass({
    
    getInitialState: function () {
        return{
            todos: [],
        }
    },

    loadTodosFromServer: function() {
        $.ajax({
            url: 'api/todos',
            method: 'GET',
        }).done(function(data) {
            this.setState({
                todos: data,
            })
        }.bind(this))
    },
    
    componentDidMount: function() {
        this.loadTodosFromServer();
    },

    render: function() {
        return (
            <div>
                <h3> Hello World </h3>
                <TodoList allMyData={ this.state.todos }/>
            </div>
            )
    },

});

React.render(<App/>, document.getElementById('app'));