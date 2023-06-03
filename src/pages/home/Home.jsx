import { useState, useContext } from "react";
import Bulk from "../../components/bulk/Bulk";
import Title from "../../components/title/Title";
import Todo from "../../components/todo/Todo";
import "./Home.css";
import Context from "../../store/Context";

function Home() {
	const state = useContext(Context);
	return (
		<main>
			<form>
				<Title>To Do List</Title>
				<div className="group__form group__search">
					<input
						className="input__search"
						type="text"
						placeholder="Search ..."
					/>
					{state[0]
						.sort((a, b) => new Date(a.date) - new Date(b.date))
						.map((e) => {
							return <Todo key={e.id} data={e} onRemove={state[1]} />;
						})}
				</div>
			</form>

			<Bulk />
		</main>
	);
}

export default Home;
