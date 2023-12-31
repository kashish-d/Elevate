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
			state.quantity += 1; //cart quantity
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity; //product quantity
		},
		removeProduct: (state, action) => {
			state.products.splice(action.payload.index, 1);
			state.quantity -= 1;
			state.total -= action.payload.product.price;
		},
	},
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
