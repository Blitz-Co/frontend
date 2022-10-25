import InputForm from '../components/InputForm';
import Logo from '../components/Logo';
import '../assets/styles/styles.css';
import StyledButton from '../components/StyledButton';
import TextButton from '../components/TextButton';
import SVGArrow from '../components/SVGArrow';
import { Link } from 'react-router-dom';
import SVGEmailIcon from '../components/SVGEmailIcon';
import SVGLockIcon from '../components/SVGLockIcon';

const SignIn = () => {
	return (
		<div className="main">
			<Logo logoWidth={194} logoHeight={77} />
			<div className="text">
				<h1>Sveicināts Blitz!</h1>
				<h3>Ielogojies, lai turpinātu.</h3>
			</div>
			<form>
				<InputForm
					childComp={<SVGEmailIcon />}
					name="email"
					type="email"
					labelName="E-PASTS"
					placeholder="E-pasts"
				/>
				<InputForm
					childComp={<SVGLockIcon />}
					minLenght={8}
					maxLenght={40}
					name="password"
					type="password"
					labelName="PAROLE"
					placeholder="Parole"
				/>
				<StyledButton type="submit" text="IELOGOTIES" />
			</form>
			<div>
				<Link to="sign-up">
					<TextButton text="Uz reģistrāciju" />
					<SVGArrow />
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
