import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} delete={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants,
          reviews: state.reviews   
        }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: rest => dispatch({ type: 'ADD_RESTAURANT', text: rest }),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
