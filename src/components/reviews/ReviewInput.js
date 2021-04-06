import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

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
    const rev = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    this.props.addReview(rev)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review</label>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="submit" />
        </form>

      </div>
    );
  }
};

export default ReviewInput;
