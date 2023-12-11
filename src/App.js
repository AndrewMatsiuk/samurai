import './App.css';
import {
  Dialogs,
  Header,
  Music,
  NavBar,
  News,
  Profile,
  Settings,
} from './components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app_wrapper-content'>
          <Routes>
            <Route element={<Dialogs />} path='/massages' />
            <Route element={<Profile />} path='/profile' />
            <Route element={<News />} path='/news' />
            <Route element={<Music />} path='/music' />
            <Route element={<Settings />} path='/settings' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
