import React from 'react'
import PropTypes from 'prop-types'
import Todos from '../components/Todos'

class AddNewTaskInput extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {value: ""  };
    // bind so we can use "this"
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event){
    // lift state up to Todos
    //this.setState({value : event.target.value});
    this.props.onValueChange(event.target.value);
    
  }



  render(){

    return (
            <div className='inputField form-group'>
              <input value={this.props.value} onChange={this.handleChange} type="text" placeholder="Your new task..." />

            </div>


          );
  }
}

export default AddNewTaskInput;
