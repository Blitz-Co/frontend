import InputForm from '../components/InputForm';
import Logo from '../components/SVGComponents/Logo';
import StyledButton from '../components/StyledButton';
import SVGArrow from '../components/SVGComponents/SVGArrow';
import TextButton from '../components/TextButton';
import '../assets/styles/sign-in-out.css';
import { Link, useNavigate } from 'react-router-dom';
import SVGEmailIcon from '../components/SVGComponents/SVGEmailIcon';
import SVGLockIcon from '../components/SVGComponents/SVGLockIcon';
import SVGIDIcon from '../components/SVGComponents/SVGIDIcon';
import { useFormik } from 'formik';
import { signUpScheme } from '../schemes/scheme';

const initialValues = {
	email: '',
	password: '',
	deviceID: '',
	confirm_password: '',
};

const SignUp = () => {
	const navigate = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: signUpScheme,
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
				<h3>Reģistrējies, lai turpinātu.</h3>
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
						childComp={<SVGIDIcon />}
						name="deviceID"
						value={values.deviceID}
						onChange={handleChange}
						onBlur={handleBlur}
						type="text"
						labelName="iIERĪCES_ID"
						placeholder="Ierīces_ID"
					/>
					{errors.deviceID && touched.deviceID ? (
						<p className="form-error">{errors.deviceID}</p>
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
				<div>
					<InputForm
						childComp={<SVGLockIcon />}
						name="confirm_password"
						value={values.confirm_password}
						onChange={handleChange}
						onBlur={handleBlur}
						type="password"
						labelName="ATKARTOJIET PAROLI"
						placeholder="Atkartojiet paroli"
					/>

					{errors.confirm_password && touched.confirm_password ? (
						<p className="form-error">{errors.confirm_password}</p>
					) : null}
				</div>

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
