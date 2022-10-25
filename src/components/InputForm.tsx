interface LabelProps {
	labelName: string;
	type?: string;
	name: string;
	placeholder: string;
	minLenght?: number;
	maxLenght?: number;
	childComp?: React.ReactNode;
}

const InputForm = (props: LabelProps) => {
	const { childComp } = props;
	return (
		<div className="input-container">
			<label>
				<span className="label">{props.labelName}</span>
				<div className="SVG-Input">
					<div>{childComp}</div>
					<input
						type="text"
						required
						minLength={props.minLenght}
						maxLength={props.maxLenght}
						{...props}
					/>
				</div>
			</label>
		</div>
	);
};

export default InputForm;
