import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Espanol from "./pages/Espanol";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/english" element={<English />} />
				<Route path="/espanol" element={<Espanol />} />
			</Routes>
		</div>
	);
}

export default App;
