import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

import { ContexProvider } from "./context";

function App() {
	return (
		<>
			<Header />
			<ContexProvider>
				<Shop />
			</ContexProvider>
			<Footer />
		</>
	);
}

export default App;
