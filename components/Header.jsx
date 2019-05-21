import React from 'react'
import PropTypes from 'prop-types'
import Greeting from '../components/Greeting'
import DaySummary from '../components/DaySummary'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
        <div className='header'>
          <div className='greeting'>
            <Greeting text="Hello Julian!" />
          </div>
          <DaySummary tasksOutsanding="3" />
        </div>

          );
  }
}

export default Header;
