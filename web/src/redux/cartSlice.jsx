import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
}
/**
 * Updates the item count in the cart state by adding the specified amount.
 *
 * @param {Object} state - The current state of the cart.
 * @param {Object} action - The action object containing the payload.
 * @param {number} action.payload - The amount to increment the item count by.
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // Extract the id, name, and price from the action payload
            const { id, name, price } = action.payload;

            // Find the item in the state items array that matches the id
            const existingItem = state.items.find((item) => item.id === id);

            // If the item already exists in the cart, increment its quantity by 1
            if (existingItem) {
                existingItem.quantity += 1;
            }
            // Otherwise, add a new item to the cart with the id, name, price, and quantity of 1
            else {
                state.items.push({ id, name, price, quantity: 1 });
            }
        },
        deleteFromcart(state, action) {
            const { id } = action.payload;
            const existingItem = items.find((item) => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                }
                else {
                    existingItem.quantity -= 1;
                }
            }
            state.totalItems -= 1;
            state.totalPrice -= existingItem.price;
        }
    },
});

export const { addToCart, deleteFromcart } = cartSlice.actions
export default cartSlice.reducer;