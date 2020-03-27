import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333' //substituir 'localhost' pelo ip exibido após a execução do expo
})

export default api;