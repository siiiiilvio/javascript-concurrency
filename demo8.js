const { config, fetch, massageData } = require('./config');

const getComicBook = () => fetch(`https://gateway.marvel.com/v1/public/comics?${config}`);
const getCharacter = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?${config}&name=${name}`);

const getSuperHeroDescription = () => {
    let name;
    getComicBook()
        .then((comicBookResponse) => {
            name = massageData(comicBookResponse);
            return getCharacter(name);
        })
        .then((characterResponse) => {
            const description = massageData(characterResponse);
            console.log(`${name} : ${description}`);
        });
}

// const getSuperHeroDescription = async () => {
//     const comicBookResponse = await getComicBook();
//     const name = massageData(comicBookResponse);

//     const characterResponse = await getCharacter(name);
//     const description = massageData(characterResponse);

//     console.log(`${name} : ${description}`);
// }

getSuperHeroDescription();