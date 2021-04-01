function BasketItem({ name, quantity, price }) {
	return (
		<li className="collection-item">
			{name} x {quantity} = {price * quantity} руб.
			<span className="secondary-content">
				<i className="material-icons basket-delete">close</i>
			</span>
		</li>
	);
}

export { BasketItem };
