interface StyledButtonProps {
	text: string;
	type: 'submit' | 'button';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const StyledButton = (props: StyledButtonProps) => {
	return (
		<button type={props.type} className="styled-button">
			{props.text}
		</button>
	);
};
export default StyledButton;
