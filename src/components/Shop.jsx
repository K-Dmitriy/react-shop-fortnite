import React, { useState, useEffect } from "react";
import Goods from "./Goods";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../config";

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoad, setIsLoad] = useState(false);

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

	return <main className="container content">{isLoad ? <Goods goods={goods} /> : <Preloader />}</main>;
}

export default Shop;
