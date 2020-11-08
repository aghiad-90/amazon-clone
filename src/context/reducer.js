export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // add item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // REMOVE FROM BASKET
      // we are copying the same basket
      let newBasket = [...state.basket];
      //find the item inside the basket
      const index = newBasket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        // remove the target item
        newBasket.splice(index, 1);
      }
      //return the new state after removing
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

// example of selector
// reduce func iterate throw the array and calculate
export const getTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export default reducer;
