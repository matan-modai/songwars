import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/v1/'

export const apiCalls = {
  loadUserData: () => {
    axios.get('me').then(response => {
      debugger
      return response.data
    })
  }
}
