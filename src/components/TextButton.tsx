interface TextButtonProps {
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextButton = (props: TextButtonProps) => {
	return <button className="text-button">{props.text}</button>;
};

export default TextButton;
