const { config, hash, fetch } = require('./config');

const apiRequest = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?ts=${config.ts}&apikey=${config.keys.publicKey}&hash=${hash}&name=${name}`);

const getSuperHero = (name) => {
    apiRequest(name).then((response) => {
        const { results } = response.data.data;
        console.log(`I am ${results[0].description}!!`);
    });
    
   console.log('Waiting...');
}

getSuperHero(`Wolverine`);

// const getSuperHero = async (name) => {
//     const response = await apiRequest(name);
//     const { results } = response.data.data;
//     console.log(`I am ${ results[0].description}!!`);
    
//     console.log('Waiting...');
// }

// getSuperHero(`Wolverine`);