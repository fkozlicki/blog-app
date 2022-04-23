const CustomInput = ({ inputRef, textarea, type, name, id, label }) => {
	return (
		<div className="d-flex flex-column input-box">
			{textarea ? (
				<textarea ref={inputRef} id={id} rows={5} cols={10} className="input" />
			) : (
				<input
					ref={inputRef}
					type={type}
					id={id}
					name={name}
					className="input"
				/>
			)}
			<label htmlFor={id} className="label order-first">
				{label}
			</label>
			<div className="input-border"></div>
		</div>
	);
};

export default CustomInput;
