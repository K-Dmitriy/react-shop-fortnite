function Good({ img, name, description, price }) {
	return (
		<li className="card">
			<div className="card-image">
				<img src={img.full_background} alt={name} />
			</div>
			<div className="card-content">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="waves-effect waves-light btn" type="button">
					Купить
				</button>
				<span className="right card-price">{price} руб</span>
			</div>
		</li>
	);
}

export default Good;
