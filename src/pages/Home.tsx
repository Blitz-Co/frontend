import NavBar from '../components/NavBar';
import '../assets/styles/homepage.css';
import InfoBox from '../components/InfoBox';

const username = 'Mihails';
const todaysEnergyUsage = 12;
const todaysPayed = 2;
const todaysAveragePrice = 0.285;
const yoursEnergyAveragePrice = 0.188;
const infoBoxOne = '~Šodien patērētā enerģija (kwh)';
const infoBoxTwo = 'Par šodienu samaksāts (€)';
const infoBoxThree = 'Šodienas vidējā cena (€/kwh)';
const infoBoxFour = 'Tev iztērētās enerģijas vidējā cena (€/kwh)';

const Home = () => {
	return (
		<>
			<NavBar name={username} />
			<div className="container">
				<div className="important-info">
					<div className="column-1">
						<InfoBox text={infoBoxOne} amount={todaysEnergyUsage} />
						<InfoBox text={infoBoxTwo} amount={todaysPayed} />
					</div>
					<div className="column-1">
						<InfoBox text={infoBoxThree} amount={todaysAveragePrice} />
						<InfoBox text={infoBoxFour} amount={yoursEnergyAveragePrice} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
