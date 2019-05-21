import React from 'react'
import PropTypes from 'prop-types'

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <div className='Greeting'>
            <h1>{this.props.text}</h1>
          </div>

          );
  }
}

export default Greeting;
