import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}>Delete Restaurant</button>
          <ReviewsContainer restaurant={restaurant} reviews={this.props.reviews} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
