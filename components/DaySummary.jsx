import React from 'react'
import PropTypes from 'prop-types'

class DaySummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <div className='day-summary'>
            You have <span>{this.props.tasksOutsanding} tasks</span> today
          </div>

          );
  }
}

export default DaySummary;
