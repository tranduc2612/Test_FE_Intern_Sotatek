import "./Button.css";

function Button({ type, content, className, onSubmit }) {
	return (
		<button onClick={onSubmit} className={`${type} ${className} btn`}>
			{content}
		</button>
	);
}

export default Button;
