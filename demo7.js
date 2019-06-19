const { config, hash, fetch } = require('./config');

const apiRequest = fetch(`http://gateway.marvel.com/v1/public/characters?ts=${config.ts}&apikey=${config.keys.publicKey}&hash=${hash}&name=wolverine`);

const getWolverine = () => {
    apiRequest.then((response) => {
        const { results } = response.data.data;
        console.log(`I am ${results[0].name}!!`);
    }).catch((e) =>
        console.log(`Something went wrong: ${e}`)
    );
}

const getWolverine = async () => {
    try {
        const response = await apiRequest;
        const { results } = response.data.data;
        console.log(`I am ${results[0].name}!!`);
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}

getWolverine();