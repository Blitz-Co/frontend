import InputForm from '../components/InputForm';
import Logo from '../components/Logo';
import '../assets/styles/styles.css';
import StyledButton from '../components/StyledButton';

const SignIn = () => {
	return (
		<div className="content">
			<Logo className="padding-bottom" logoWidth={194} logoHeight={77} />
			<h1 className="padding-bottom">Sveicināts Blitz</h1>
			<h3 className="padding-bottom">Ielogojaties, lai turpinātu.</h3>
			<InputForm type="email" labelName="E-PASTS" placeholder="E-pasts" />
			<InputForm type="password" labelName="PAROLE" placeholder="Parole" />
			<StyledButton text="IELOGOTIES" />
		</div>
	);
};

export default SignIn;
