import './App.css';
import { Header, NavBar, Profile } from './components';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
      <Profile />
    </div>
  );
};

export default App;
