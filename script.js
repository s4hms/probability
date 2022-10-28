let factCalc = document.querySelector(".fact-calc");
let factAnswer = document.querySelector(".factorial-answer");
let factInput = document.querySelector(".fact-input").value;

// FACTORIAL FUNCTION:
const calcFactorial = function (inp) {
  let factorial = 1;
  if ((inp === 0) | (inp === 1)) {
    return 1;
  } else {
    while (inp >= 0) {
      if (inp === 1) {
        return factorial;
      } else {
        factorial = factorial * inp--;
      }
    }
  }
};

// Factorial Event listener
factCalc.addEventListener("click", function () {
  factInput = document.querySelector(".fact-input").value;
  if (factInput === "") {
    factInput = 0;
  }
  if (Number(factInput) < 0) {
    factAnswer.textContent = `ERROR: Negative numbers don't have Factorial`;
    factAnswer.style.color = "red";
  } else {
    let output = calcFactorial(Number(factInput));
    factAnswer.textContent = `The Factorial of ${factInput} is ${output}`;
    factAnswer.style.color = "black";
  }
  factAnswer.style.textAlign = "center";
  factAnswer.style.fontWeight = "bold";
});

// --------------------------------------------------------------------------------------------

let permN = document.querySelector(".perm-n").value;
let permR = document.querySelector(".perm-r").value;
let permCalc = document.querySelector(".perm-calc");
let permAnswer = document.querySelector(".perm-answer");

// Permutation Function
const calcPermutation = function (n, r) {
  let numer = calcFactorial(n);
  let denom = calcFactorial(n - r);
  return numer / denom;
};

// Permutation Event listener
permCalc.addEventListener("click", function () {
  permN = document.querySelector(".perm-n").value;
  permR = document.querySelector(".perm-r").value;

  if (permN === "") {
    permN = 1;
  }
  if (permR === "") {
    permR = 1;
  }
  if (Number(permR) > Number(permN)) {
    permAnswer.textContent = `ERROR: The value of 'r' can not be greater than the value of 'n'`;
    permAnswer.style.color = "rgb(255,0,0)";
  } else {
    permAnswer.textContent = `${permR} object(s) out of ${permN} object(s) can be selected in ${calcPermutation(
      Number(permN),
      Number(permR)
    )} way(s).`;
    permAnswer.style.color = "black";
  }
  permAnswer.style.fontWeight = "bold";
  permAnswer.style.textAlign = "center";
});

// --------------------------------------------------------------------------------------------

let combN = document.querySelector(".comb-n").value;
let combR = document.querySelector(".comb-r").value;
let combCalc = document.querySelector(".comb-calc");
let combAnswer = document.querySelector(".comb-answer");

// Combination function
const calcCombination = function (n, r) {
  let numer = calcFactorial(n);
  let denom = calcFactorial(n - r) * calcFactorial(r);
  return numer / denom;
};

// Combination Event listener
combCalc.addEventListener("click", function () {
  combN = document.querySelector(".comb-n").value;
  combR = document.querySelector(".comb-r").value;

  if (combN === "") {
    combN = 1;
  }
  if (combR === "") {
    combR = 1;
  }

  if (Number(combR) > Number(combN)) {
    combAnswer.textContent = `ERROR: The value of 'r' can not be greater than the value of 'n'`;
    combAnswer.style.color = "rgb(255,0,0)";
  } else {
    combAnswer.textContent = `${combR} object(s) out of ${combN} object(s) can be combined in ${calcCombination(
      Number(combN),
      Number(combR)
    )} way(s)`;
    combAnswer.style.color = "black";
  }
  combAnswer.style.fontWeight = "bold";
  combAnswer.style.textAlign = "center";
});

// --------------------------------------------------------------------------------------------

let oneTrialOps = document.querySelector(".one-trial-ops").value;
let totalTrials = document.querySelector(".total-trials").value;
let favOutcome = document.querySelector(".fav-all-trials").value;
let probCalcExactly = document.querySelector(".prob-ex-calc");
let probExAnswer = document.querySelector(".prob-ex-answer");

// Probability exactly function
const probExactly = function (onetrailops, totaltrials, favoutcome) {
  return calcCombination(totaltrials, favoutcome) / onetrailops ** totaltrials;
};

// Probability exactly event listener
probCalcExactly.addEventListener("click", function () {
  oneTrialOps = document.querySelector(".one-trial-ops").value;
  totalTrials = document.querySelector(".total-trials").value;
  favOutcome = document.querySelector(".fav-all-trials").value;

  if (Number(favOutcome) > Number(totalTrials)) {
    probExAnswer.textContent = `ERROR: The value of total trial(s) can not be lesser than the value of favorable output(s)`;
    probExAnswer.style.color = "rgb(255,0,0)";
  } else {
    probExAnswer.textContent = `The Probability of getting ${favOutcome} favorable output(s) in ${totalTrials} trial(s) is ${probExactly(
      Number(oneTrialOps),
      Number(totalTrials),
      Number(favOutcome)
    )}`;
    probExAnswer.style.color = "black";
  }
  probExAnswer.style.fontWeight = "bold";
  probExAnswer.style.textAlign = "center";
});

// --------------------------------------------------------------------------------------------

let oneTrialOpsAtl = document.querySelector(".one-trial-ops-atl").value;
let totalTrialsAtl = document.querySelector(".total-trials-atl").value;
let favOutcomeAtl = document.querySelector(".fav-all-trials-atl").value;
let probCalcAtl = document.querySelector(".prob-atl-calc");
let probAtlAnswer = document.querySelector(".prob-atl-answer");

// Probability of at-least function:
const probAtl = function (onetrailops, totaltrials, favoutcome) {
  let probab = 0;
  for (let index = favoutcome; index <= totaltrials; index++) {
    probab = probab + probExactly(onetrailops, totaltrials, index);
  }
  return probab;
};

// Probability of at-least event listener
probCalcAtl.addEventListener("click", function () {
  oneTrialOpsAtl = document.querySelector(".one-trial-ops-atl").value;
  totalTrialsAtl = document.querySelector(".total-trials-atl").value;
  favOutcomeAtl = document.querySelector(".fav-all-trials-atl").value;

  if (Number(favOutcomeAtl) > Number(totalTrialsAtl)) {
    probAtlAnswer.textContent = `ERROR: The value of total trial(s) can not be lesser than the value of favorable output(s)`;
    probAtlAnswer.style.color = "rgb(255,0,0)";
  } else {
    probAtlAnswer.textContent = `The Probability of getting at-least ${favOutcomeAtl} favorable output(s) in ${totalTrialsAtl} trial(s) is ${probAtl(
      Number(oneTrialOpsAtl),
      Number(totalTrialsAtl),
      Number(favOutcomeAtl)
    )}`;
    probAtlAnswer.style.color = "black";
  }
  probAtlAnswer.style.fontWeight = "bold";
  probAtlAnswer.style.textAlign = "center";
});

// --------------------------------------------------------------------------------------------

let oneTrialOpsAtm = document.querySelector(".one-trial-ops-atm").value;
let totalTrialsAtm = document.querySelector(".total-trials-atm").value;
let favOutcomeAtm = document.querySelector(".fav-all-trials-atm").value;
let probCalcAtm = document.querySelector(".prob-atm-calc");
let probAtmAnswer = document.querySelector(".prob-atm-answer");

// Probability of at-most function:
const probAtm = function (onetrailops, totaltrials, favoutcome) {
  let probab = 0;
  if (onetrailops === 1) {
    for (let index = 1; index <= favoutcome; index++) {
      probab = probab + probExactly(onetrailops, totaltrials, index);
    }
  } else {
    for (let index = 0; index <= favoutcome; index++) {
      probab = probab + probExactly(onetrailops, totaltrials, index);
    }
  }
  return probab;
};

// Probability of at-most event listener
probCalcAtm.addEventListener("click", function () {
  oneTrialOpsAtm = document.querySelector(".one-trial-ops-atm").value;
  totalTrialsAtm = document.querySelector(".total-trials-atm").value;
  favOutcomeAtm = document.querySelector(".fav-all-trials-atm").value;

  if (Number(favOutcomeAtm) > Number(totalTrialsAtm)) {
    probAtmAnswer.textContent = `ERROR: The value of total trial(s) can not be lesser than the value of favorable output(s)`;
    probAtmAnswer.style.color = "rgb(255,0,0)";
  } else {
    probAtmAnswer.textContent = `The Probability of getting at-least ${favOutcomeAtm} favorable output(s) in ${totalTrialsAtm} trial(s) is ${probAtm(
      Number(oneTrialOpsAtm),
      Number(totalTrialsAtm),
      Number(favOutcomeAtm)
    )}`;
    probAtmAnswer.style.color = "black";
  }
  probAtmAnswer.style.fontWeight = "bold";
  probAtmAnswer.style.textAlign = "center";
});
