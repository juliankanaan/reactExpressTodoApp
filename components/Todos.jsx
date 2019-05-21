import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../components/Todo'

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
        <div className='card'>
          <div className='card-body'>
            <Todo text="Take out trash" />
            <Todo text="Ask out lizzy" />
            <Todo text="Sleep" />
          </div>
        </div>

          );
  }
}

export default Todos;
