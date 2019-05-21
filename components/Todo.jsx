import React from 'react'
import PropTypes from 'prop-types'
import Delete from '../components/Delete'
import '../style.css'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <div className='container'>
          <div className="todo">
            <div>
              {this.props.text}
            </div>

          </div>
          </div>

          );
  }
}

export default Todo;
