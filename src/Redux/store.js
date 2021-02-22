import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'Hi, how are you', likesCount: 0 },
        { id: 1, message: "It's my ferst post", likesCount: 23 },
        { id: 2, message: "blabla", likesCount: 11 },
        { id: 3, message: "DaDa", likesCount: 12 },
      ],
      newPostText: 'Hello',
    },
    dialogsPage: {
      dialogs: [
        { name: "Dimich", id: 1 },
        { name: "Andrey", id: 2 },
        { name: "Katya", id: 3 },
        { name: "Sveta", id: 4 },
        { name: "Valera", id: 5 },
        { name: "Pavel", id: 6 },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'YO' },
        { id: 5, message: 'YO' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },

  getState() {
    return this._state
  },

  _callSubscriber() { },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;



