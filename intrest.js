//intrest = P * N * R;

const P = 90000;
const N = 5;
let R ;

if(P >= 60000 && N >= 2){
    R = 0.05;
}
else if (P >= 70000 && N>= 4){
    R = 0.06;
}
else{
    R = 0.04;
}

const intrest = P * N * R;
const netAmount = P + intrest;

console.log(`Principal Amount is ${P}`);
console.log(`Net of Year is ${N}`);
console.log(`Rate of intrest is ${R}`);
console.log(`intrest of amount is ${intrest}`);
console.log(`Net Amount is ${netAmount}`);





