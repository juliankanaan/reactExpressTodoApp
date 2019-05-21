import React from 'react'
import PropTypes from 'prop-types'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
        <div className='details'>
          {props.text}
        </div>
          );
  }
}

export default Details;
