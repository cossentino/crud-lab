import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value  
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name</label>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
