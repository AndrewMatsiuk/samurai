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

const App = (props) => {
  const {
    state,
    dispatch,
    addPost,
    updateNewPostText,
    addNewMessage,
    updateNewMessageText,
  } = props;
  const { dialogsPage, profilePage } = state;
  const { posts, newPostText } = profilePage;
  const { messages, dialogs, newMessageText } = dialogsPage;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app_wrapper-content'>
          <Routes>
            {
              <Route
                element={
                  <Dialogs
                    messages={messages}
                    dialogs={dialogs}
                    dispatch={dispatch}
                    newMessageText={newMessageText}
                    addNewMessage={addNewMessage}
                    updateNewMessageText={updateNewMessageText}
                  />
                }
                path='/massages'
              />
            }
            <Route
              element={
                <Profile
                  posts={posts}
                  dispatch={dispatch}
                  newPostText={newPostText}
                  addPost={addPost}
                  updateNewPostText={updateNewPostText}
                />
              }
              path='/profile'
            />
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
