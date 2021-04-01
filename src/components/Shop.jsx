import React, { useState, useEffect } from "react";
import Goods from "./Goods";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../config";
import Basket from "./Basket";
import { BasketList } from "./BasketList";

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoad, setLoad] = useState(false);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setBasketShow] = useState(false);

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

	function handleRemoveOrder(id) {
		setOrder(order.filter((good) => good.id !== id));
	}

	function handleBasketShow() {
		setBasketShow(!isBasketShow);
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
				setLoad(true);
			})
			.catch((err) => {
				console.error(err);
				setLoad(true);
			});
	}, []);

	return (
		<main className="container content">
			<Basket quantity={order.length} handleBasketShow={handleBasketShow} />
			{isLoad ? <Goods goods={goods} handleAddOrder={handleAddOrder} /> : <Preloader />}
			{isBasketShow ? (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					handleRemoveOrder={handleRemoveOrder}
				/>
			) : null}
		</main>
	);
}

export default Shop;
