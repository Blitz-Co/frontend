import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import '../assets/styles/NavBar.css';
import { IconContext } from 'react-icons';
import SVGProfileImage from './SVGComponents/SVGProfileImage';

import NavBarLogo from './SVGComponents/NavBarLogo';

interface NavBarProps {
	name: string;
}
function NavBar(props: NavBarProps) {
	const [sideBar, setSideBar] = useState(false);

	const showSideBar = () => setSideBar(true);
	const closeSideBar = () => setSideBar(false);

	return (
		<>
			<IconContext.Provider value={{ color: '#000000' }}>
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaBars onClick={showSideBar} />
					</Link>
					<Link to="/home">
						<NavBarLogo className="logo" />
					</Link>
				</div>
			</IconContext.Provider>
			<IconContext.Provider value={{ color: '#ffffff' }}>
				<nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
					<Link to="#" className="menu-bars close" onClick={closeSideBar}>
						<AiOutlineClose />
					</Link>
					<div className="side-menu-pic">
						<SVGProfileImage />
						<p>{props.name}</p>
					</div>
					<ul className="nav-menu-items" onClick={showSideBar}>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default NavBar;
