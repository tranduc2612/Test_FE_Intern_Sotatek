import { useRef, useContext } from "react";
import Form from "../form/Form";
import Button from "./../button/Button";
import "./Todo.css";
import Context from "../../store/Context";

function Todo({ data, onRemove, onSelect }) {
	const updateForm = useRef("");
	const state = useContext(Context);

	const handleEventShowForm = (e) => {
		e.preventDefault();
		if (updateForm.current.classList.contains("active")) {
			updateForm.current.classList.remove("active");
		} else {
			updateForm.current.classList.add("active");
		}
	};
	const handleEventRemove = (e) => {
		e.preventDefault();
		const newArr = state[0].filter((value) => {
			return value.id != data.id;
		});
		onRemove(newArr);
		localStorage.setItem("data", JSON.stringify(newArr));
	};

	const handleUpdate = (name, date, description, piority) => {
		console.log(name, date, description, piority);
		console.log(data.id);
		const newObjectData = {
			name,
			date,
			description,
			piority,
		};
		const newList = state[0].map((e) =>
			e.id === data.id ? { ...e, ...newObjectData } : e
		);
		localStorage.setItem("data", JSON.stringify(newList));
		state[1](newList);
	};

	const handleBulk = (e) => {
		if (e.target.checked == true) {
			const newBulk = [...onSelect[0], data.id];
			onSelect[1](newBulk);
		} else {
			const newBulk = onSelect[0].filter((e) => {
				return e !== data.id;
			});
			onSelect[1](newBulk);
		}
	};
	return (
		<div className="wrap">
			<div className="todo__item">
				<div className="todo__left">
					<input type="checkbox" onClick={handleBulk} />
					<h3 className="todo__name">{data.name}</h3>
				</div>
				<div className="todo__right">
					<Button
						type="bg-detail"
						content="Detail"
						className={"btn-list"}
						onSubmit={handleEventShowForm}
					/>
					<Button
						type="bg-error"
						content="Remove"
						onSubmit={handleEventRemove}
						className={"btn-list"}
					/>
				</div>
			</div>
			<div className="wrap__form" ref={updateForm}>
				<Form type="update" data={data} onSubmit={handleUpdate} />
			</div>
		</div>
	);
}

export default Todo;
