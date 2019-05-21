// imports input field, button, submit button
// actually submits form
import React from 'react'
import PropTypes from 'prop-types'
import AddNewTaskInput from '../components/AddNewTaskInput'
import AddNewTaskButton from '../components/AddNewTaskButton'


class NewTaskControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wantsToAddTask: false};
    // bind shit so we can use "this"
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    this.handleCancelAddTaskClick = this.handleCancelAddTaskClick.bind(this);

  }
  handleAddTaskClick(){
    // alert("Clicked and want to add task");
    this.setState({wantsToAddTask:true});
  }
  handleCancelAddTaskClick(){
    // alert("Cancel");
    this.setState({wantsToAddTask: false})
  }

  render(){
    const wantsToAddTask = this.state.wantsToAddTask;
    let element;

    if (wantsToAddTask) {
      element = <div><AddNewTaskButton text="Cancel" onClick={this.handleCancelAddTaskClick} /><AddNewTaskInput /></div>;
    } else {
      element = <AddNewTaskButton text="Add new task" onClick={this.handleAddTaskClick} />;
    }
    return (
            <div>
              {element}
            </div>
          );
  }
}

export default NewTaskControl;
