import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
	return (
		<>
			<div className="navbar"></div>
			<Link to="#" className="menu-bars">
				<FaBars />
			</Link>
		</>
	);
};

export default NavBar;
