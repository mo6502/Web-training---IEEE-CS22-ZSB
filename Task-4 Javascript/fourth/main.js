// four questions

// first one

// Test Case 1
let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"

if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}
console.log("the first question is finished");
// second one

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num1 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}
if (num1 == str && typeof num1 != typeof str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}

console.log("the second question is finished");
// the third one

let num0 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

if (num3 > num0 && num3 !== num2) {
  console.log(
    `30 Is Larger Than 10 And Type string Not The Same Type As number`
  );
} else if (num3 > num0 && num3 == num2) {
  console.log(
    `30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`
  );
} else if (num3 !== num0 && num3 !== num2) {
  console.log(
    `${num3} Value And Type Is Not The Same As ${num0} And Type Is Not The Same As ${num2}`
  );
}

console.log("the third question is finished");
