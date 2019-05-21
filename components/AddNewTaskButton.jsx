import React from 'react'
import PropTypes from 'prop-types'


class AddNewTaskButton extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {value: ''};
  }


  render(){
    return (
            <div className='newTask'>
              <button onClick={this.props.onClick} className="add btn btn-primary">
                {this.props.text}
              </button>

            </div>

          );
  }
}

export default AddNewTaskButton;
