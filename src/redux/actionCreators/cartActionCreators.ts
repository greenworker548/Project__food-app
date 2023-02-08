import { ADD_CARD_TO_CART, DELETE_ALL_CART, DELETE_ITEM_CART } from "../actionTypes/cartActionTypes";

export const addCard = (payload: {}) => ({type: ADD_CARD_TO_CART, payload})
export const deleteAllCart = () => ({type: DELETE_ALL_CART})
export const deleteItemCart = (payload?: any) => ({type: DELETE_ITEM_CART, payload})