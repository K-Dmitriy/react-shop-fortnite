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

	function incrementQuantity(id) {
		const newOrder = order.map((good) => {
			if (good.id === id) {
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

	function decrementQuantity(id) {
		const newOrder = order.map((good) => {
			if (good.id === id && good.quantity > 1) {
				return {
					...good,
					quantity: good.quantity - 1,
				};
			} else {
				return good;
			}
		});

		setOrder(newOrder);
	}

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
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
				/>
			) : null}
		</main>
	);
}

export default Shop;
