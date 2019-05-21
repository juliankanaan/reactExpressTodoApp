import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class Nameform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event){
    // save name
    //console.log(this.state.value);
    window.location
    event.preventDefault();
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input type="name" placeholder="your name here" value={this.state.value} onChange={this.handleChange} />
              <Link href='/tasks'>
              <button type='submit' className="add">start</button>
              </Link>
            </div>
          </form>


          );
  }
}

export default Nameform;
