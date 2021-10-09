import './App.css';
import { ProfileProps } from './interfaces/ProfileProps';
import { Profile } from './components/Profile';
import { Nav } from './components/Nav';
import { Cards } from './components/Cards';
import { CardProps } from './interfaces/CardProps';
import { Card } from './components/Card';

const profile: ProfileProps = {
	name: 'SneakerHead',
	profilePicLink: 'src/profile-pic.jpg',
	link: 'sneakerhead.io',
	tag: 'sneakers',
	info: 'Sneaker related stuff',
	followers: 10000,
	folllowing: 2000,
};

const cards: CardProps[] = [];

cards.push({
	id: 1,
	title: 'My Pies',
	pins: 6700,
	time: '2021-03-28',
	pic1: 'src/pictures/pie1.jpeg',
	pic2: 'src/pictures/pie2.jpeg',
	pic3: 'src/pictures/pie3.jpeg',
}, {
	id: 2,
	title: 'Cute Cats',
	pins: 99999,
	time: '2020-03-28',
	pic1: 'src/pictures/cat1.jpeg',
	pic2: 'src/pictures/cat2.jpeg',
	pic3: 'src/pictures/cat3.jpeg',
}, {
	id: 3,
	title: 'iPhones',
	pins: 5500,
	time: '2019-03-28',
	pic1: 'src/pictures/iphone1.jpeg',
	pic2: 'src/pictures/iphone2.jpeg',
	pic3: 'src/pictures/iphone3.jpeg',
},{
	id: 4,
	title: 'My Pies',
	pins: 6700,
	time: '2021-03-28',
	pic1: 'src/pictures/pie1.jpeg',
	pic2: 'src/pictures/pie2.jpeg',
	pic3: 'src/pictures/pie3.jpeg',
}, {
	id: 5,
	title: 'Cute Cats',
	pins: 99999,
	time: '2020-03-28',
	pic1: 'src/pictures/cat1.jpeg',
	pic2: 'src/pictures/cat2.jpeg',
	pic3: 'src/pictures/cat3.jpeg',
}, {
	id: 6,
	title: 'iPhones',
	pins: 5500,
	time: '2019-03-28',
	pic1: 'src/pictures/iphone1.jpeg',
	pic2: 'src/pictures/iphone2.jpeg',
	pic3: 'src/pictures/iphone3.jpeg',
},{
	id: 7,
	title: 'My Pies',
	pins: 6700,
	time: '2021-03-28',
	pic1: 'src/pictures/pie1.jpeg',
	pic2: 'src/pictures/pie2.jpeg',
	pic3: 'src/pictures/pie3.jpeg',
}, {
	id: 8,
	title: 'Cute Cats',
	pins: 99999,
	time: '2020-03-28',
	pic1: 'src/pictures/cat1.jpeg',
	pic2: 'src/pictures/cat2.jpeg',
	pic3: 'src/pictures/cat3.jpeg',
}, {
	id: 9,
	title: 'iPhones',
	pins: 5500,
	time: '2019-03-28',
	pic1: 'src/pictures/iphone1.jpeg',
	pic2: 'src/pictures/iphone2.jpeg',
	pic3: 'src/pictures/iphone3.jpeg',
});

function App() {
	return (
		<div className="App">
			<Nav />
			<Profile profile={profile} />
			<Cards cards={cards}/>
		</div>
	);
}

export default App;