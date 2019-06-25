const { config, fetch, massageData } = require('./config');

const apiRequest = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?${config}&name=${name}`);

const getSuperHero = (name) => {
    apiRequest(name)
        .then((response) => {
            const description = massageData(response);
            console.log(`I am ${description} 🔪🔪🔪`);
        });
    
    console.log('Hey bub!');
}

getSuperHero(`Wolverine`);

// const getSuperHero = async (name) => {
//     const response = await apiRequest(name);
//     const description = massageData(response);
//     console.log(`I am ${description} 🔪🔪🔪`);
    
//     console.log('Hey bub!');
// }

// getSuperHero(`Wolverine`);