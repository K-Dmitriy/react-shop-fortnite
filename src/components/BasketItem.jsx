function BasketItem({ id, name, quantity, price, handleRemoveOrder = Function.prototype }) {
	return (
		<li className="collection-item">
			{name} x {quantity} = {price * quantity} руб.
			<span className="secondary-content" onClick={() => handleRemoveOrder(id)}>
				<i className="material-icons basket-delete">close</i>
			</span>
		</li>
	);
}

export { BasketItem };
