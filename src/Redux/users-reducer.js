import { userAPI } from "../api/api";
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return {
        //       ...u,
        //       followed: true
        //     }
        //   }
        //   return u;
        // })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return {
        //       ...u,
        //       followed: false,
        //     }
        //   }
        //   return u;
        // })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId }
};
export const unFollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId }
};
export const setUsers = (users) => {
  return { type: SET_USERS, users }
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}


export const requestUsers = (page, currentPag = 1) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPag));
  const data = await userAPI.getUsers(page, currentPag)
  dispatch(toggleIsFetching(false));
  dispatch(setTotalUsersCount(data.totalCount))
  dispatch(setUsers(data.items))
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.follow.bind(this), followSuccess)
}

export const unFollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(this), unFollowSuccess)
}

// export const follow = (userId) => async (dispatch) => {
//   dispatch(toggleFollowingProgress(true, userId));
//   const response = await userAPI.follow(userId);
//   if (response.data.resultCode === 0) {
//     dispatch(followSuccess(userId))
//   }
//   dispatch(toggleFollowingProgress(false, userId))
// }

// export const unFollow = (userId) => async (dispatch) => {
//   dispatch(toggleFollowingProgress(true, userId));
//   const response = await userAPI.unfollow(userId);
//   if (response.data.resultCode === 0) {
//     dispatch(unFollowSuccess(userId))
//   }
//   dispatch(toggleFollowingProgress(false, userId))
// }


export default usersReducer;