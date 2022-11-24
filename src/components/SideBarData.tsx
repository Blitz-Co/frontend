import { AiFillHome } from 'react-icons/ai';
import { IoIosInformationCircle } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

export const SidebarData = [
	{
		title: 'PROFILS',
		path: '/profile',
		icon: <CgProfile />,
		cName: 'nav-text',
	},
	{
		title: 'SĀKUMS',
		path: '/home',
		icon: <AiFillHome />,

		cName: 'nav-text',
	},
	{
		title: 'PAMĀCĪBA',
		path: '/tutorial',
		icon: <IoIosInformationCircle />,
		cName: 'nav-text',
	},
	{
		title: 'IZLOGOTIES',
		path: '/',
		icon: <BiLogOut />,
		cName: 'nav-text',
	},
];
