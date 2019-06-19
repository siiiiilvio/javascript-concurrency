const { config, hash, fetch, massageData } = require('./config');

const getComicBook = () => fetch(`https://gateway.marvel.com/v1/public/comics?ts=${config.ts}&apikey=${config.keys.publicKey}&hash=${hash}`);
const getCharacter = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?ts=${config.ts}&apikey=${config.keys.publicKey}&hash=${hash}&name=${name}`);

const getSuperHeroDescription = () => {
    getComicBook()
        .then((response) => {
            const name = massageData(response);
            return name;
        })
        .then((name) => {
            return getCharacter(name);
        })
        .then((hero) => {
            const description = massageData(hero);
            console.log(`${description}`);
        });
}

getSuperHeroDescription();

// const getSuperHeroDescription = async () => {
//     const comicBookResponse = await getComicBook();
//     const name = massageData(comicBookResponse);

//     const characterResponse = await getCharacter(name);
//     const description = massageData(characterResponse);

//     console.log(`${description}`);
// }

// getSuperHeroDescription();