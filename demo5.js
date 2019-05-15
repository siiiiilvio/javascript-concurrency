console.time(`time`);

const excuse = `Sorry Triple J, I won’t make it in for work`;

function summonSpiderman() {
    putSpidermanCostume();
    // Promise.resolve().then(() => putSpidermanCostume());
	callInSickForWork(excuse);
}

function putSpidermanCostume() {
    //console.time(`time`);
	let i = 0;
    while(i < 3000000000) {
        i++;
    };
    console.log(`🕷️ Costume is on!`);
    // console.timeEnd(`time`);
}

function callInSickForWork(reason) {
    console.log(reason);
}

summonSpiderman();

console.timeEnd(`time`);
