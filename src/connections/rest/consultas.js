import axios from 'axios'

export default axios.create({
	'Content-Post': process.env.VUE_APP_REST_CONSULTAS_TOKEN,
	baseURL: process.env.VUE_APP_REST_CONSULTAS_URL,
	timeout: 5000
})
