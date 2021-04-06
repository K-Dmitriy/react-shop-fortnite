function reducer(state, { type, payload }) {
	switch (type) {
		case "add-good-to-order": {
			const goodIndex = state.order.findIndex((good) => good.id === payload.id);

			let order = null;

			if (goodIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};

				order = [...state.order, newItem];
			} else {
				order = state.order.map((good, index) => {
					if (index === goodIndex) {
						return {
							...good,
							quantity: good.quantity + 1,
						};
					} else {
						return good;
					}
				});
			}

			return { ...state, order, alertName: payload.name };
		}

		case "remove-good-from-order":
			return { ...state, order: state.order.filter((good) => good.id !== payload) };

		case "show-basket":
			return { ...state, isBasketShow: !state.isBasketShow };

		case "increment-quantity":
			return {
				...state,
				order: state.order.map((good) => {
					if (good.id === payload) {
						return {
							...good,
							quantity: good.quantity + 1,
						};
					} else {
						return good;
					}
				}),
			};

		case "decrement-quantity":
			return {
				...state,
				order: state.order.map((good) => {
					if (good.id === payload && good.quantity > 1) {
						return {
							...good,
							quantity: good.quantity - 1,
						};
					} else {
						return good;
					}
				}),
			};

		case "close-alert":
			return { ...state, alertName: "" };

		case "get-data":
			if (payload.shop) {
				return { ...state, goods: payload.shop, isLoad: true };
			}
			return { ...state, isLoad: true };

		case "get-data-error":
			console.error(payload);
			return { ...state, isLoad: true };

		default:
			console.error("Unknown action");
			return state;
	}
}

export default reducer;
