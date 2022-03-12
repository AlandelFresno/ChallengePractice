const axios = require('axios');

const AxiosGet = ( method = 'GET') => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const token = process.env.REACT_APP_SECRET_KEY;
    return axios({
            method: method, 
            url: `${baseUrl}${token}`,
        })
        .then((response) => 
            response
        )
        .catch((error) => 
            error.response
        );


};

export {
    AxiosGet,
};