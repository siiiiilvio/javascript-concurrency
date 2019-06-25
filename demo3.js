function summonThor() {
    chargeMjolnir();
    console.log(`Ready!`);
}

function chargeMjolnir() {
    setTimeout(() => console.log(`\x1b[33m`, `⚡`), 1000);
}

summonThor();
