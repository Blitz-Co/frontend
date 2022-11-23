import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

const App = () => {
	return (
		<div>
			<Routes>
				<Route index element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
