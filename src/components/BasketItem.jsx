import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem({ id, name, quantity, price }) {
	const { handleRemoveOrder, incrementQuantity, decrementQuantity } = useContext(ShopContext);

	return (
		<li className="collection-item">
			{name} x{" "}
			<i
				className="material-icons basket-quantity__basket blue darken-4"
				onClick={() => decrementQuantity(id)}
			>
				remove
			</i>
			{quantity}
			<i
				className="material-icons basket-quantity__basket blue darken-4"
				onClick={() => incrementQuantity(id)}
			>
				add
			</i>
			= {price * quantity} руб.
			<span className="secondary-content" onClick={() => handleRemoveOrder(id)}>
				<i className="material-icons basket-delete">close</i>
			</span>
		</li>
	);
}

export default BasketItem;
