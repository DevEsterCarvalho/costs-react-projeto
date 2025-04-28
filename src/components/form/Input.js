import styles from "./Input.module.css";
function Input({ type, text, name, placehoder, value, handleOnChange }) {
	return (
		<div className={styles.form_control}>
			<label htmlFor={name}>{text}:</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placehoder}
				onChange={handleOnChange}
				value={value}
			></input>
		</div>
	);
}

export default Input;
