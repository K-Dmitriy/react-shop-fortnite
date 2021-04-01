import BasketItem from "./BasketItem";

function BasketList({
	order = [],
	handleBasketShow = Function.prototype,
	handleRemoveOrder = Function.prototype,
	incrementQuantity = Function.prototype,
	decrementQuantity = Function.prototype,
}) {
	const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<ul className="collection basket-list">
			<li className="collection-item active">Корзина</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						key={item.id}
						{...item}
						handleRemoveOrder={handleRemoveOrder}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
					/>
				))
			) : (
				<li className="collection-item">Корзина пуста</li>
			)}
			<li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
			{/* <li className="collection-item">
				<button className="btn btn-small">Оформить</button>
			</li> */}
			<i className="material-icons basket-close" onClick={handleBasketShow}>
				close
			</i>
		</ul>
	);
}

export default BasketList;
