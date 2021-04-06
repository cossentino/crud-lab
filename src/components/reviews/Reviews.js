import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((rev, i) => {
          return <Review review={rev} key={i}/>
        })}
      </ul>
    );
  }
};

export default Reviews;