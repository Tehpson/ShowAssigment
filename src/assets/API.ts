import Axios from 'axios'

//creat connection to API
export const ShowAPI = Axios.create({
	baseURL: 'https://api.tvmaze.com'
})