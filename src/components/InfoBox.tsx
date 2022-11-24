interface InfoBoxProps {
	text: string;
	amount: number;
}

const InfoBox = (props: InfoBoxProps) => {
	return (
		<div className="info-box">
			<p id="text">{props.text}</p>
			<p>{props.amount}</p>
		</div>
	);
};

export default InfoBox;
