import {combineReducers} from "redux";

function comments(state = [], action) {
  if(action.type === "COMMENTS_LOADED"){
    return action.value;
  }
  return state;
}

function products(state = [], action) {
  if(action.type === "PRODUCTS_LOADED"){
    return action.value;
  }
  return state;
}

function contacts(state = [], action) {
  return state;
}

function vehicles(state = [], action) {
  return state;
}



const rootReducer = combineReducers({
  comments,products,contacts,vehicles
});
export default rootReducer;
