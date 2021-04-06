import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}


const mapDispatchToProps = dispatch => ({
  addReview: rev => {
    
    dispatch({ type: 'ADD_REVIEW', review: rev })
  },
  // deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
