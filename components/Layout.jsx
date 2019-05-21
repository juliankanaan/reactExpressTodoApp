import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import '../style.css'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(){
    return (
          <div className="todo-content" >
            <Header />
            {this.props.children}
          </div>

          );
  }
}

export default Layout;
