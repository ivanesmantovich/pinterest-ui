import './App.css'
import {ProfileProps} from './interfaces/ProfileProps'
import { Profile } from './components/Profile'
import { Nav } from './components/Nav'

const profile: ProfileProps = {
  name: 'SneakerHead',
  profilePicLink: 'src/profile-pic.jpg',
  link: 'sneakerhead.io',
  tag: 'sneakers',
  info: 'Sneaker related stuff',
  followers: 10000,
  folllowing: 2000
}


function App() {
  return (
    <div className="App">
      <Nav/>
      <Profile profile={profile}/>
    </div>
  )
}

export default App