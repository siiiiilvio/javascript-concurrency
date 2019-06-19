const md5 = require('md5');
const axios = require('axios');

const config = {
    keys: {
        publicKey: '306da4671a64c46cddfe2f0e3f8e164c',
        privateKey: '5707976057ff0723b8a2681ff1d3f524ed69a6c8'
    },
    ts: Date.now()
}

const hash = md5(config.ts + config.keys.privateKey + config.keys.publicKey);

const fetch = (url) => {
    return new Promise((resolve) => 
        setTimeout(resolve, 500)
    ).then(() => axios({
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }));
}

module.exports = { 
    config,
    hash,
    response,
    fetch
};
