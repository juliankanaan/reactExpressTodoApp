import React from 'react'
import PropTypes from 'prop-types'
import Delete from '../components/Delete'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (

          <div className='todo' style={{display: "flex"}}>
            <div>
              {this.props.text}
            </div>
            <Delete />
          </div>

          );
  }
}

export default Todo;
