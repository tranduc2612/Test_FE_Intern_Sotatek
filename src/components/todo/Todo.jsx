import { useRef, useContext } from "react";
import Form from "../form/Form";
import Button from "./../button/Button";
import "./Todo.css";
import Context from "../../store/Context";

function Todo({ data, onRemove }) {
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
	return (
		<div className="wrap">
			<div className="todo__item">
				<div className="todo__left">
					<input type="checkbox" />
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
				<Form type="update" data={data} />
			</div>
		</div>
	);
}

export default Todo;
