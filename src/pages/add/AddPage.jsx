import React, { useRef } from "react";
import Title from "../../components/title/Title";
import "./AddPage.css";
import Button from "./../../components/button/Button";
function AddPage() {
	const inputName = useRef();
	const inputDescription = useRef();
	const inputDate = useRef();
	const inputPiority = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const nameValue = inputName.current.value;
		const descriptionValue = inputDescription.current.value;
		const dateValue = inputDate.current.value;
		const Piority = inputPiority.current.value;
		console.log(nameValue, descriptionValue, dateValue, Piority);
	};
	return (
		<main>
			<form>
				<Title>New Task</Title>
				<div className="group__form group__name">
					<input
						className="input__name"
						type="text"
						placeholder="Add new task ..."
						ref={inputName}
					/>
				</div>
				<div className="group__form group__description">
					<label className="label__description" htmlFor="description">
						Description
					</label>
					<textarea
						className="input__description"
						name="description"
						rows="12"
						ref={inputDescription}
					></textarea>
				</div>
				<div className="group__multiple">
					<div className="group__form">
						<label className="label__date" htmlFor="date">
							Due Date
						</label>
						<input
							className="input__date"
							type="date"
							name="date"
							ref={inputDate}
						/>
					</div>

					<div className="group__form">
						<label className="label__piority" htmlFor="piority">
							Piority
						</label>
						<select
							className="input__piority"
							ref={inputPiority}
							name="piority"
						>
							<option value="low">low</option>
							<option value="normal">normal</option>
							<option value="hight">hight</option>
						</select>
					</div>
				</div>
				<Button
					className="btn-add"
					type="success"
					handleSubmit={handleSubmit}
					content="Add"
				/>
			</form>
		</main>
	);
}

export default AddPage;
