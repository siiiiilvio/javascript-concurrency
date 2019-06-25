const md5 = require('md5');
const axios = require('axios');

// Configuration for the Marvel API
const configuration = {
    keys: {
        publicKey: 'YourMarvelPublicKeyHere',
        privateKey: 'YourMarvelPrivateKeyHere'
    },
    ts: Date.now()
}
const hash = md5(configuration.ts + configuration.keys.privateKey + configuration.keys.publicKey);
const config = `ts=${configuration.ts}&apikey=${configuration.keys.publicKey}&hash=${hash}`;

// Mocked fetch function using axios and simulated latency
const fetch = (url) => {
    return new Promise((resolve) => 
        // Add setTimeout to simulate latency
        setTimeout(resolve, 250)
    ).then(() => axios({
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }));
}

// Massage data to return character name or description
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
