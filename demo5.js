const excuse = `Sorry Triple J, I won’t make it in for work`;

console.time(`getting ready`);

function summonSpiderman() {
    putSpidermanCostume();
    // Promise.resolve().then(() => putSpidermanCostume());
    callInSickForWork(excuse);
}

function putSpidermanCostume() {
    console.time(`costume`);
	let i = 0;
    while(i < 3000000000) {
        i++;
    };
    console.log(`🕷️ Costume is on!`);
    console.timeEnd(`costume`);
}

function callInSickForWork(reason) {
    console.log(reason);
}

summonSpiderman();

console.timeEnd(`getting ready`);
