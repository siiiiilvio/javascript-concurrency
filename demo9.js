const { config, fetch, massageData } = require('./config');

const getComicBook = () => fetch(`https://gateway.marvel.com/v1/public/comics?${config}`);
const getCharacter = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?${config}&name=${name}`);
// const getCharacter = () => new Promise((resolve, reject) => { reject(`Unauthorized`) });

const getSuperHeroDescription = async () => {
    const comicBookResponse = await getComicBook();
    const name = massageData(comicBookResponse);

    const characterResponse = await getCharacter(name);
    const description = massageData(characterResponse);

    console.log(`${name} ⛈️  : ${description}`);
}

// const getSuperHeroDescription = async () => {
//     const name = 
//         await getComicBook()
//             .then((response) => massageData(response))
//             .catch((error) => console.log(error));

//     const description =
//         await getCharacter(name)
//             .then((response) => massageData(response))
//             .catch((error) => console.log(error));

//     name && description && console.log(`${name} ⛈️  : ${description}`);
// }

getSuperHeroDescription();