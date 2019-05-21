import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <div className='container'>
            <Header />
            {this.props.children}
          </div>

          );
  }
}

export default Layout;
