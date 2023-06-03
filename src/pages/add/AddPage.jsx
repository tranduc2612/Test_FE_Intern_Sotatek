import React, { useRef, useState, useEffect, useContext } from "react";
import Title from "../../components/title/Title";
import "./AddPage.css";
import Alert from "../../components/alerts/Alert";
import { Link, useNavigate } from "react-router-dom";
import Form from "./../../components/form/Form";
import Context from "../../store/Context";

function AddPage() {
	const [alert, setAlert] = useState(false);
	const navigate = useNavigate();
	const state = useContext(Context);

	const handleAdd = (name, date, des, piority) => {
		// xử lí ở thêm ở đây
		const newObject = {
			id: Math.random().toFixed(5),
			name,
			date,
			description: des,
			piority,
		};
		const newArr = [...state[0], newObject];
		const setList = state[1];
		setList(newArr);
		localStorage.setItem("data", JSON.stringify(newArr));
		setAlert(true);
		setTimeout(() => {
			navigate("/");
		}, 10000);
	};

	const handleConfirm = () => {
		navigate("/");
	};

	return (
		<>
			{!alert ? null : (
				<Alert
					type={"success-alert"}
					message={"Create Success"}
					handleConfirm={handleConfirm}
				/>
			)}
			<main>
				<form>
					<Title>New Task</Title>
					<Form onSubmit={handleAdd} type={"Add"} />
				</form>
			</main>
		</>
	);
}

export default AddPage;
