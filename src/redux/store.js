import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

export let store = {
  _state: {
    dialogsPage: {
      messages: [
        { id: 1, value: 'Hey111111111111111' },
        { id: 2, value: 'Hey1' },
        { id: 3, value: 'Hey2' },
        { id: 4, value: 'Hey3' },
        { id: 5, value: 'Hey4' },
        { id: 6, value: 'Hey5' },
        { id: 7, value: 'Hey27-lesson' },
      ],
      dialogs: [
        { id: 1, name: 'Andrii' },
        { id: 2, name: 'Oleg' },
        { id: 3, name: 'Marko' },
        { id: 4, name: 'Matias' },
        { id: 5, name: 'Levron' },
        { id: 6, name: 'Vlad' },
      ],
      newMessageText: '',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi post 1', likes: 15 },
        { id: 2, message: 'Hi post 2', likes: 2 },
      ],
      newPostText: '',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._callSubscriber = observe;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

global.store = store;
