interface LabelProps {
	labelName: string;
	type: string;
	name: string;
	placeholder: string;
	childComp?: React.ReactNode;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: LabelProps) => {
	const { childComp } = props;
	return (
		<div className="input-container">
			<label>
				<span className="label">{props.labelName}</span>
				<div className="SVG-Input">
					<div>{childComp}</div>
					<input {...props} />
				</div>
			</label>
		</div>
	);
};

export default InputForm;
