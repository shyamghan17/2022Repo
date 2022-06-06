

export const initialState = {
cart:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART_ITEMS":
            return {
              ...state,
              cart: action.payload,
            };
      
      default:
        return state;
    }
  };
  
