import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //! CART QUANTITY
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //! ITEM QUANTITY X PRICE
    },
  },
});

//! payload is basically our new product added to the cart , works only with toolkit as PURE REDUX do not allow to mutate the state (10-15)
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
