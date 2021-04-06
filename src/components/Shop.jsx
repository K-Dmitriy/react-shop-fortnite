import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";

import Goods from "./Goods";
import Preloader from "./Preloader";
import Basket from "./Basket";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
	const { isLoad, isBasketShow, alertName, getData, getDataError } = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Could not fetch ${API_URL}, received ${response.status}`);
				}
				return response.json();
			})
			.then((data) => getData(data))
			.catch((error) => getDataError(error));
		// eslint-disable-next-line
	}, []);

	return (
		<main className="container content">
			<Basket />
			{isLoad ? <Goods /> : <Preloader />}
			{isBasketShow && <BasketList />}
			{alertName && <Alert />}
		</main>
	);
}

export default Shop;
