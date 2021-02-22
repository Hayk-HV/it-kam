import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    { id: 0, message: 'Hi, how are you', likesCount: 0 },
    { id: 1, message: "It's my first post", likesCount: 23 },
    { id: 2, message: "blabla", likesCount: 11 },
    { id: 3, message: "DaDa", likesCount: 12 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText }
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
};
export const setStatus = (status) => {
  return { type: SET_USER_STATUS, status: status }
}


export const getUserProfile = (userId) => async (dispatch) => {
  const response = await userAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
};

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
};

export const updateUserStatus = (status) => (dispatch) => {
  const response = profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}



export default profileReducer;