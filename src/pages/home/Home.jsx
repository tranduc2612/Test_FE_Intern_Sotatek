import { useState, useContext } from "react";
import Bulk from "../../components/bulk/Bulk";
import Title from "../../components/title/Title";
import Todo from "../../components/todo/Todo";
import "./Home.css";
import Context from "../../store/Context";
import { Link } from "react-router-dom";

function Home() {
	const state = useContext(Context);
	const [selectedId, setSelectedId] = useState([]);
	const [search, setSearch] = useState("");

	const handleRemoveList = () => {
		const newList = state[0].filter((e) => !selectedId.includes(e.id));
		state[1](newList);
		setSelectedId([]);
		localStorage.setItem("data", JSON.stringify(newList));
	};
	return (
		<main>
			<form>
				<Link style={{ textAlign: "right", display: "block" }} to="/create">
					Create {">"}
				</Link>
				<Title>To Do List</Title>
				<div className="group__form group__search">
					<input
						className="input__search"
						type="text"
						placeholder="Search ..."
						onChange={(e) => setSearch(e.target.value)}
					/>
					{state[0]
						.sort((a, b) => new Date(a.date) - new Date(b.date))
						.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
						.map((e) => {
							return (
								<Todo
									key={e.id}
									data={e}
									onRemove={state[1]}
									onSelect={[selectedId, setSelectedId]}
								/>
							);
						})}
				</div>
			</form>
			{selectedId.length ? <Bulk onRemoveList={handleRemoveList} /> : <></>}
		</main>
	);
}

export default Home;
