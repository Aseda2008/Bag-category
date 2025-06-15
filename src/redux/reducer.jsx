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
      return { ...state, product: [...state.product, action.payload] };
    case 'SET_PRODUCTS':
      return { ...state, product: action.payload };
    default:
      return state;
  }
}

export default reducer;
