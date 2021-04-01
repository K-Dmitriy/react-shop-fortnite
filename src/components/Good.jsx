function Good({ id, img, name, description, price, handleAddOrder = Function.prototype }) {
	return (
		<li className="card" id={id}>
			<div className="card-image">
				<img src={img.full_background} alt={name} />
			</div>
			<div className="card-content">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button
					className="waves-effect waves-light btn"
					type="button"
					onClick={() => handleAddOrder({ id, name, price })}
				>
					Купить
				</button>
				<span className="right card-price">{price} руб</span>
			</div>
		</li>
	);
}

export default Good;
