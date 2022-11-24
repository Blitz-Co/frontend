import InputForm from '../components/InputForm';
import Logo from '../components/SVGComponents/Logo';
import '../assets/styles/sign-in-out.css';
import StyledButton from '../components/StyledButton';
import TextButton from '../components/TextButton';
import SVGArrow from '../components/SVGComponents/SVGArrow';
import { Link, useNavigate } from 'react-router-dom';
import SVGEmailIcon from '../components/SVGComponents/SVGEmailIcon';
import SVGLockIcon from '../components/SVGComponents/SVGLockIcon';
import { useFormik } from 'formik';
import { signInScheme } from '../schemes/scheme';

const initialValues = {
	email: '',
	password: '',
};
const SignIn = () => {
	const navigate = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: signInScheme,
		onSubmit: (values, action) => {
			action.resetForm();
			console.log(values);
			navigate('/home');
		},
	});
	return (
		<div className="main">
			<Logo />
			<div className="text">
				<h1>Sveicināts Blitz!</h1>
				<h3>Ielogojies, lai turpinātu.</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<InputForm
						childComp={<SVGEmailIcon />}
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						type="email"
						labelName="E-PASTS"
						placeholder="E-pasts"
					/>
					{errors.email && touched.email ? (
						<p className="form-error">{errors.email}</p>
					) : null}
				</div>
				<div>
					<InputForm
						childComp={<SVGLockIcon />}
						name="password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						type="password"
						labelName="PAROLE"
						placeholder="Parole"
					/>

					{errors.password && touched.password ? (
						<p className="form-error">{errors.password}</p>
					) : null}
				</div>
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
