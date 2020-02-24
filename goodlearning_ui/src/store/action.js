import axios from 'axios'
const apiConfig = require('../assets/js/apiURL').apiURL

export default {
    AdminLogin({ commit }, admin) {
        const apiUrl = apiConfig.adminLogin
        console.log(apiConfig,commit)
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, {}, { params: admin })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (err) {
                    console.log(err)
                    reject(err)
                })
        })
    }
}