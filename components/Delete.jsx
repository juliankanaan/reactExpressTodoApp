import React from 'react'
import PropTypes from 'prop-types'

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render(){
    return (
          <button onClick="" className="btn btn-secondary">
            X
          </button>

          );
  }
}

export default Delete;
