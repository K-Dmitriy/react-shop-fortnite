function BasketItem({
	id,
	name,
	quantity,
	price,
	handleRemoveOrder = Function.prototype,
	incrementQuantity = Function.prototype,
	decrementQuantity = Function.prototype,
}) {
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

export { BasketItem };
