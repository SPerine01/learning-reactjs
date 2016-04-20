var Todo = React.createClass({    

  getInitialState: function () {
    return {editing:false}
  },
    
    edit: function() {
      alert('edit todo');
      this.setState({editing:true});
    },

    remove: function() {

      alert('Todo removed');
    },

    save: function () {
      alert('Todo saved');
    },

    toDoDisplay: function () {
      return (
            
        <li className="todo">

          <span onClick={this.edit}>
            {this.props.children}
          </span>

          <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />

        </li>    
       );
    },

    toDoForm: function () {
      return (
            
        <li className="todo">

          <span>
            <input type="text" placeholder="Edit Todo" defaultValue={this.props.children} />
          </span>

          <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />

        </li>    
       );
    },

    render: function() {
    }
});


React.render(<div>

                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder='Add Todo' />
                        <button className="btn btn-default btn-sm">+</button>
                    </div>

                </div>

              <ul>
                <Todo>Call House</Todo>
                <Todo>Go to Trader Joes</Todo>
                <Todo>Learn React</Todo>
              </ul>

            </div>, document.getElementById('todo'));






