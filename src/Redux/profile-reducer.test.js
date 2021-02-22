import profileReducer, { addPostActionCreator } from "./profile-reducer";

const state = {
  posts: [
    { id: 0, message: 'Hi, how are you', likesCount: 0 },
    { id: 1, message: "It's my first post", likesCount: 23 },
    { id: 2, message: "blabla", likesCount: 11 },
    { id: 3, message: "DaDa", likesCount: 12 },
  ],
}

it('longest if posts should be increment', () => {
  let action = addPostActionCreator('it');
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5)
})