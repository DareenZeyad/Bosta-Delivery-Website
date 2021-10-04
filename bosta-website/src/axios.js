import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tracking.bosta.co'
})

// instance.interceptors.request(req => {

// })

// instance.interceptors.response((res) => {
// })

export default instance 