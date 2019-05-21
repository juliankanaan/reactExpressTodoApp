import React from 'react'
import PropTypes from 'prop-types'
import Delete from '../components/Delete'
import '../style.css'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', completed: false};
    this.markCompleted = this.markCompleted.bind(this);
  }
  markCompleted(event){
    //alert("hi");
    console.log(event.target);
    this.setState({completed: true});
  }

  render(){
      let className = "todo";
      if (this.state.completed) {
        className += ' completed'; // add class to it if is completed for css to target
      }
    return (

          <div onClick={this.markCompleted} className={className}>
              {this.props.text}
          </div>

          );
  }
}

export default Todo;
