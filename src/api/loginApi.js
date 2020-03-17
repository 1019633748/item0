import axios from 'axios'
const url = 'http://localhost:8080/'

export function login(username, password) {
    axios.post('login', { username, password }).then((r) => {
        return r
    }).catch((e) => {
        return e
    })
}

export function loginTest() {
    axios.post(url + 'login', ).then((r) => {
        return r
    }).catch((e) => {
        return e
    })
}