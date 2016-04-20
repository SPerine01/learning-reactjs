var Todo = React.createClass({    

    edit: function() {
        alert("edit todo");
    },

    delete: function() {
        alert("Todo removed");
    },

    render: function() {
      
           return (
            <div>

                  <li className="todo">
                    <span onClick={this.edit}>
                    {this.props.children}
                    </span>
                  </li>
          
            </div>
       );
    },
      

});

React.render(<div>
                <h1>Things to Do</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" />               
                        <button className="btn btn-default btn-sm">+</button>             
                    </div>
             
                </div>

            <ul>
                <Todo>Call House</Todo>
                <Todo>Go to Trader Joes</Todo>
                <Todo>Learn React</Todo>
            </ul>

            </div>, 
            document.getElementById('todo')
            );
