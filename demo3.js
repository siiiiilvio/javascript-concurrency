function summonThor() {
    chargeMjolnir();
    console.log(`Ready!`);
}

function chargeMjolnir() {
    setTimeout(() => console.log(`⚡`), 1000);
}

summonThor();
