const { config, fetch, massageData } = require('./config');

const getCharacter = (name) => fetch(`https://gateway.marvel.com/v1/public/characters?${config}&name=${name}`);

const getSuperHeroDescription = async () => {
    console.time(`Avengers Assemble!`);

    const firstCharacter = await getCharacter(`Iron Man`);
    const secondCharacter = await getCharacter(`Captain America`);

    console.log(`\x1b[33m`, `${massageData(firstCharacter)}`);
    console.log(`\x1b[34m`, `${massageData(secondCharacter)}`);

    // const firstCharacter = getCharacter(`Iron Man`);
    // const secondCharacter = getCharacter(`Captain America`);

    // [first, second] = await Promise.all([firstCharacter, secondCharacter]);

    // console.log(`\x1b[33m`, `${massageData(first)}`);
    // console.log(`\x1b[34m`, `${massageData(second)}`);

    console.timeEnd(`Avengers Assemble!`);
}

getSuperHeroDescription();

