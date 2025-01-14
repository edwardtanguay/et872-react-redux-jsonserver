import { Outlet } from "react-router-dom";
import { Header } from "../common/components/Header";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</>
	);
}

export default App;
