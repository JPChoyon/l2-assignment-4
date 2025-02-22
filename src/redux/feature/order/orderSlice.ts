import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Order = {
  id: string;
  email: string;
  carId: string;
  quantity: number;
  totalPrice: number;
};

type OrderState = {
  orders: Order[];
  loading: boolean;
  error: string | null;
};

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { setOrders, addOrder } = orderSlice.actions;
export const selectOrders = (state: RootState) => state.orders.orders;
export default orderSlice.reducer;
