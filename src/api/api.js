import axios from "axios"

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { 'API-KEY': '0ed0d19f-0cdd-4e2c-a282-fb87e87e2853' },
});

export const userAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn("Please use yhe new profileAPI")
    return profileAPI.getProfile(userId)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe) {
    return instance.post('auth/login', { email, password, rememberMe })
  },
  logout() {
    return instance.delete('auth/login')
  }
}