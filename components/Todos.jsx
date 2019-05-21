import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../components/Todo'
import NewTaskController from '../components/NewTaskController'
import AddNewTaskInput from '../components/AddNewTaskInput'
import '../style.css'


class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], value: ''}; // lifted state from AddNewTaskInput

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    const items = [
      {text: "Take out trash"},
      {text: "Ask out that girl"},
      {text: "Sleep"}
    ];
    this.setState({
      todos: items
    }); // update state w/ array
  }
  handleValueChange(event){
    this.setState({value: event});
    //console.log(event);
  }
  handleSubmit(event){
    //alert("Submitted: " + this.state.value);
    // need to add it to todos
    const items = this.state.todos;
    const newItems = [...items]; // copy
    newItems.push({text: this.state.value}); // add new task
    this.setState({todos: newItems}); //update state
    // clear form
    event.target.reset();
    event.preventDefault();
  }


  render(){
    return (
        <div>
        <div className='card'>
          <div className='card-body'>
            {this.state.todos.map( (item, index) => <Todo text={item.text} /> ) }
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
        <AddNewTaskInput onValueChange={this.handleValueChange} />
        <button type="submit">Add new task</button>
        </form>
        </div>
          );
  }
}

export default Todos;
