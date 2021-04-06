import { useContext } from "react";
import { ShopContext } from "../context";

function Basket() {
	const { order, handleBasketShow } = useContext(ShopContext);

	return (
		<div className="basket blue darken-4 white-text" onClick={handleBasketShow}>
			<i className="material-icons">shopping_cart</i>
			{order.length ? <span className="basket-quantity teal lighten-2">{order.length}</span> : null}
		</div>
	);
}

export default Basket;
