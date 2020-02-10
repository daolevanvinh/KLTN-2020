var apiConfig = require('../../API/api.json')
var apiAddress = apiConfig.apiURL

var apiURL = {
    getVideo: apiAddress + "/getVideo"
}

exports.apiURL = apiURL