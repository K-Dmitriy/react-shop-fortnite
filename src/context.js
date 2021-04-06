import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initState = {
	goods: [],
	isLoad: false,
	order: [],
	isBasketShow: false,
	alertName: "",
};

export const ContexProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initState);

	value.getData = (data) => dispatch({ type: "get-data", payload: data });
	value.getDataError = (error) => dispatch({ type: "get-data-error", payload: error });
	value.handleBasketShow = () => dispatch({ type: "show-basket" });
	value.handleAddOrder = (item) => dispatch({ type: "add-good-to-order", payload: item });
	value.handleRemoveOrder = (id) => dispatch({ type: "remove-good-from-order", payload: id });
	value.incrementQuantity = (id) => dispatch({ type: "increment-quantity", payload: id });
	value.decrementQuantity = (id) => dispatch({ type: "decrement-quantity", payload: id });
	value.closeAlert = () => dispatch({ type: "close-alert" });

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
