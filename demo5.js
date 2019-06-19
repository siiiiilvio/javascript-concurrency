console.time(`getting ready`);

const excuse = `Sorry Triple J, I won’t make it in for work`;

function summonSpiderman() {
    putSpidermanCostume();
    //Promise.resolve().then(() => putSpidermanCostume());
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
