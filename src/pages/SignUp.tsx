import InputForm from '../components/InputForm';
import Logo from '../components/Logo';
import StyledButton from '../components/StyledButton';
import SVGArrow from '../components/SVGArrow';
import TextButton from '../components/TextButton';
import '../assets/styles/styles.css';
import { Link } from 'react-router-dom';
import SVGEmailIcon from '../components/SVGEmailIcon';
import SVGLockIcon from '../components/SVGLockIcon';
import SVGIDIcon from '../components/SVGIDIcon';

const SignUp = () => {
	return (
		<div className="main">
			<Logo logoWidth={194} logoHeight={77} />
			<div className="text">
				<h1>Sveicināts Blitz!</h1>
				<h3>Reģistrējies, lai turpinātu.</h3>
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
					childComp={<SVGIDIcon />}
					name="device-id"
					labelName="iIERĪCES_ID"
					placeholder="Ierīces_ID"
				/>
				<InputForm
					childComp={<SVGLockIcon />}
					name="password"
					type="password"
					labelName="PAROLE"
					placeholder="Parole"
					minLenght={8}
					maxLenght={40}
				/>
				<InputForm
					childComp={<SVGLockIcon />}
					name="confirm"
					type="password"
					labelName="ATKARTOJIET PAROLI"
					placeholder="Atkartojiet paroli"
					minLenght={8}
					maxLenght={40}
				/>

				<StyledButton type="submit" text="REĢISTRETIES" />
			</form>
			<div>
				<Link to="/">
					<TextButton text="Uz loginu" />
				</Link>
				<SVGArrow />
			</div>
		</div>
	);
};
export default SignUp;
