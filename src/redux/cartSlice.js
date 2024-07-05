import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if there is any product in they array:(my refrence)
      const addProductsExist = state.products.find(
        (product) => product.id === action.payload.id
      );

      // one liner condition: (my refrenec purpose)

      // addProductsExist ? addProductsExist.quantity += parseInt(action.payload.quantity) : state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})

      if (addProductsExist) {
        addProductsExist.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }

      state.productsNumber += parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      // find the product removing form the array 
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      // remove the quantity form product number
      state.productsNumber -= productToRemove.quantity;

      // find the index of the product we are removing
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );

      // use the index to remove product from the array
      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const itemInc = state.products.find((item) => item.id === action.payload);
      if (itemInc.quantity >= 1) {
        itemInc.quantity = itemInc.quantity + 1;
      }
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state, action) => {
      const itemDec = state.products.find((item) => item.id === action.payload);
      if (itemDec.quantity === 1) {
        const index = state.products.findIndex(
          (item) => item.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
