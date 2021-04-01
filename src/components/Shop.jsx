import React, { useState, useEffect } from "react";
import Goods from "./Goods";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../config";
import Basket from "./Basket";

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoad, setIsLoad] = useState(false);
	const [order, setOrder] = useState([]);

	function handleAddOrder(item) {
		const goodIndex = order.findIndex((good) => good.id === item.id);

		if (goodIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};

			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((good, index) => {
				if (index === goodIndex) {
					return {
						...good,
						quantity: good.quantity + 1,
					};
				} else {
					return good;
				}
			});

			setOrder(newOrder);
		}
	}

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setIsLoad(true);
			})
			.catch((err) => {
				console.error(err);
				setIsLoad(true);
			});
	}, []);

	return (
		<main className="container content">
			<Basket quantity={order.length} />
			{isLoad ? <Goods goods={goods} handleAddOrder={handleAddOrder} /> : <Preloader />}
		</main>
	);
}

export default Shop;
