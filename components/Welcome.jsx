import React from 'react'
import PropTypes from 'prop-types'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <h1>Welcome!</h1>

          );
  }
}

export default Welcome;
