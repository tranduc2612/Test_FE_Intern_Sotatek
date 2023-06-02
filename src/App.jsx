import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddPage from "./pages/add/AddPage";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<AddPage />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
}

export default App;
