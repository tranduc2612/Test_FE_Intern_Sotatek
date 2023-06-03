import Context from "./Context";
import { useState, useLayoutEffect, useId } from "react";

function Provider({ children }) {
	const [list, setList] = useState([]);
	useLayoutEffect(() => {
		if (localStorage.getItem("data") != undefined) {
			setList(JSON.parse(localStorage.getItem("data")));
		} else {
			const newArr = [
				{
					id: Math.random().toFixed(5),
					name: "Do homework",
					description: "bla bla bla",
					date: "2023-06-06",
					piority: "low",
				},
				{
					id: Math.random().toFixed(5),
					name: "Sing",
					description: "bla bla bla",
					date: "2023-06-03",
					piority: "low",
				},
				{
					id: Math.random().toFixed(5),
					name: "Task 3",
					description: "bla bla bla",
					date: "2023-06-05",
					piority: "low",
				},
			];
			setList(newArr);
			localStorage.setItem("data", JSON.stringify(newArr));
		}
	}, []);
	return (
		<Context.Provider value={[list, setList]}>{children}</Context.Provider>
	);
}

export default Provider;
