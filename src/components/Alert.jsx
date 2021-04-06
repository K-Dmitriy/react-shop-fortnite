import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
	const { alertName = "", closeAlert } = useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 1500);

		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line
	}, [alertName]);

	return (
		<div id="toast-container">
			<div className="toast">
				<b>{alertName}</b> &#8194; добавлен в корзину
			</div>
		</div>
	);
}

export default Alert;
