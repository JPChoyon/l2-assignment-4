import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
  carId: string;
  quantity: number;
  brand: string;
  model: string;
  totalPrice: number;
}

interface CartState {
  items: CartItem[]; // Specify that items is an array of CartItem
}
const initialState: CartState = {
  items: [], // Start with an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
