function summonThanos() {
    setTimeout(() => console.log(`💎`), 0);
    summonAntMan();
}

function summonAntMan() {
    Promise.resolve().then(() => console.log(`🐜`));
}

summonThanos();