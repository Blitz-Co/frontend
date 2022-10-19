interface LabelProps {
	labelName: string;
	type?: string;
	placeholder: string;
	className?: string;
}

const InputForm = (props: LabelProps) => {
	return (
		<form className="input">
			<label>
				<span className="label-name">{props.labelName}</span>
				<input className="input-box" type="text" name="name" {...props} />
			</label>
		</form>
	);
};

export default InputForm;
