import { useContext } from "react";
import { ShopContext } from "../context";

import Good from "./Good";

function Goods() {
	const { goods = [] } = useContext(ShopContext);

	if (!goods.length) {
		return <h2>Нет данных</h2>;
	}

	return (
		<ul className="goods">
			{goods.map(({ mainId, price, displayName, displayDescription, granted }) => {
				return (
					<Good
						key={mainId}
						id={mainId}
						name={displayName}
						description={displayDescription}
						price={price.finalPrice}
						img={granted[0].images}
					/>
				);
			})}
		</ul>
	);
}

export default Goods;
