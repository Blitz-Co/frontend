interface StyledButtonProps {
	text: string;
}
const StyledButton = (props: StyledButtonProps) => {
	return <button className="styled-button">{props.text}</button>;
};
export default StyledButton;
