function Basket({ quantity }) {
	return (
		<div className="basket blue darken-4 white-text">
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className="basket-quantity teal lighten-2">{quantity}</span> : null}
		</div>
	);
}

export default Basket;
