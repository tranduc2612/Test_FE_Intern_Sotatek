import "./Button.css";

function Button({ type, content, className, handleSubmit }) {
	return (
		<button onClick={handleSubmit} className={`${type} ${className} btn`}>
			{content}
		</button>
	);
}

export default Button;
