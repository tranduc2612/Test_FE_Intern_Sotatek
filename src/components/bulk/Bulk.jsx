import Button from "./../button/Button";
import "./Bulk.css";
function Bulk({ onRemoveList }) {
	return (
		<>
			<div className="bulk__form">
				<div className="bulk__left">
					<h3>Bulk Action:</h3>
				</div>
				<div className="bulk__right">
					<Button className="btn-bulk" content="Done" type="bg-primary" />
					<Button
						className="btn-bulk"
						onSubmit={onRemoveList}
						content="Remove"
						type="bg-error"
					/>
				</div>
			</div>
		</>
	);
}

export default Bulk;
