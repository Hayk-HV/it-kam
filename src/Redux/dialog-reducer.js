const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body, }],
      }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody }
};

export default dialogReducer;