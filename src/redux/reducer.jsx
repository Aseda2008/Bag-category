import axios from "axios";

const initialState = {
  menuOpen: true,
  product: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, menuOpen: true };
    case 'CLOSE_MENU':
      return { ...state, menuOpen: false };
    case 'ADD_PRODUCT':
      axios.post(`https://api-crud.elcho.dev/api/v1/e43c9-6cf6b-a54b6/bag`, action.payload); 
      return { ...state, product: [...state.product, action.payload] };
    case 'SET_PRODUCTS':
      return { ...state, product: action.payload };
       case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
