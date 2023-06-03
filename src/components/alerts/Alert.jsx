import "./Alert.css";

function Alert({ message, type, handleConfirm }) {
	return (
		<div className="alert">
			<div className={`form-confirm`}>
				<h1 className={`title-alert ${type}`}>{message} !</h1>
				<div className="action-alert">
					<span className="title-sub">
						Well-done, you pressed a button or (auto redirect after 5s)
					</span>
					<button
						onClick={handleConfirm}
						className="btn btn-confirm"
						type="button"
					>
						Confirm
					</button>
				</div>
			</div>
			<div className="fade"></div>
		</div>
	);
}

export default Alert;
