import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  findReviews = rest => {
    return this.props.reviews.filter(rev => rev.restaurantId === rest.id ) 
  }

  render() {
    
    return(
      <ul>
        {this.props.restaurants.map( (r, i) => {
          return <Restaurant restaurant={r} reviews={this.findReviews(r)} key={i} delete={this.props.delete}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;