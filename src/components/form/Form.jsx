import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../../components/button/Button";
import "./Form.css";

function Form({ onSubmit, type, data }) {
	const [isName, setIsName] = useState(true);
	const [name, setName] = useState(data ? data.name : "");
	const [description, setDescription] = useState(data ? data.description : "");
	const [date, setDate] = useState(
		data ? data.date : new Date().toISOString().split("T")[0]
	);
	const [piority, setPiority] = useState(data ? data.piority : "normal");

	const handleEventDate = (event) => {
		const today = new Date().toISOString().split("T")[0];
		event.target.min = today;
		if (event.target.value < today) {
			setDate(today);
		} else {
			setDate(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		// validate
		event.preventDefault();
		const nameValue = name;
		const dateValue = date;
		const descriptionValue = description;
		const piorityValue = piority;

		if (nameValue == "") {
			setIsName(false);
		} else {
			setIsName(true);
			onSubmit(nameValue, dateValue, descriptionValue, piorityValue);
		}
	};

	return (
		<>
			<div className="group__form group__name">
				<input
					className="input__name"
					type="text"
					placeholder="Add new task ..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{!isName ? (
					<span className="name__message error">
						Task title is a required field.
					</span>
				) : null}
			</div>
			<div className="group__form group__description">
				<label className="label__description" htmlFor="description">
					Description
				</label>
				<textarea
					className="input__description"
					name="description"
					rows="12"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
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
						value={date}
						onChange={handleEventDate}
					/>
				</div>

				<div className="group__form">
					<label className="label__piority" htmlFor="piority">
						Priority
					</label>
					<select
						className="input__piority"
						value={piority}
						onChange={(e) => setPiority(e.target.value)}
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
				type="bg-success"
				onSubmit={handleSubmit}
				content={type}
			/>
		</>
	);
}

export default Form;
