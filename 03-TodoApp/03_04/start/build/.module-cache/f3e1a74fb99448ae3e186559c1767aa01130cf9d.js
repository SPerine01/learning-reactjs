var Todo = React.createClass({displayName: "Todo",    

    render: function() {
      
           return (
            React.createElement("div", null, 

                  React.createElement("li", {className: "todo"}, this.props.children)
          
            )
       );
    },
      

});


React.render(React.createElement("div", null, 
                React.createElement("h1", null, "Things to Do"), 

                React.createElement("div", {className: "form-inline"}, 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
                        React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
                    )
             
                ), 

            React.createElement("ul", null, 
                React.createElement(Todo, null, "Call House"), 
                React.createElement(Todo, null, "Go to Trader Joes"), 
                React.createElement(Todo, null, "Learn React")
            )

            ), 
            document.getElementById('todo')
            );
