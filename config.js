const md5 = require('md5');
const axios = require('axios');

const configuration = {
    keys: {
        publicKey: '306da4671a64c46cddfe2f0e3f8e164c',
        privateKey: '5707976057ff0723b8a2681ff1d3f524ed69a6c8'
    },
    ts: Date.now()
}
const hash = md5(configuration.ts + configuration.keys.privateKey + configuration.keys.publicKey);
const config = `ts=${configuration.ts}&apikey=${configuration.keys.publicKey}&hash=${hash}`;

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

const massageData = (response) => {
    if(response) {
        const { results } = response.data.data;
        if (results[0].characters) {
            return results[0].characters.items[0].name
        } else {
            return results[0].description;
        }
    }
}

module.exports = { 
    config,
    hash,
    fetch,
    massageData
};
