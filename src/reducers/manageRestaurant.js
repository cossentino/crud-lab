import cuid from 'cuid';

const id1 = cuid()
const id2 = cuid()
const rest1 = {id: id1, text: "Olive Garden"}
const rest2 = {id: id2, text: "Applebees"}
const rev1 = {id: cuid(), restaurantId: id1, text: "lovely spot"}
const rev2 = {id: cuid(), restaurantId: id2, text: "jolly good"}


export default function manageRestaurants(state = {
  restaurants: [rest1, rest2],
  reviews: [rev1, rev2]
}, action) {
  
  
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const rest = {
        id: cuid(),
        text: action.text
      }
      return {...state, restaurants: [...state.restaurants, rest]}

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(r => r.id !== action.id )}

    case 'ADD_REVIEW':
      const rev = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
 
      return {...state, reviews: [...state.reviews, rev]}



    default:
      return state
  }
}


