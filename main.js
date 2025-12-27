// 1. finding the total value of odd numbers from 1 to 100
// let totalNumber = 0
// for(let i = 1; i<=100; i++) {

//     if (i%2==1) {
//         totalNumber+=i;
//     }
// }
// console.log(totalNumber)

// 2. reversing the string(prompt) the user enters using for
// let Prompt = prompt("Enter something whatever it is")
// let reversed = ""

// for (let i = Prompt.length - 1; i >= 0; i--) {
//     reversed += Prompt[i]
// }
// console.log(reversed)

// 3. Returning the "Hello world!" 10 times
// for (let i = 1; i <= 10; i++) {
//     console.log("Hello world")
// }

// 4. Palindrom
// let promptValue = prompt("Enter any word!")
// let reversed = ""

// for (let i = promptValue.length -1; i >=0 ; i--) {
//     reversed += promptValue[i]
// }

// if (promptValue === reversed ) {
//     console.log("Palindrom")
// }else {
//     console.log("Not Palindrom")
// }

// 5. Returning only the upparCase letters
// let text = prompt("Enter Anything with upparCase")
// let result = ""

// for (let i = 0; i <= text.length - 1; i++) {
//     if (text[i] === text[i].toUpperCase()) {
//         result += text[i]
//     }
// }

// console.log(result)

// 6. Returning two of all the characters
// let text = "Enter anything ig"
// let result = ""

// for (let i = 0; i < text.length -1; i++) {
//     result += text[i].repeat(2)
// }
// console.log(result)

// 7. returning how many "a" are in the string
// let text = "what the heck brahh aaaaa"
// let result = ""

// for (let i = 0; i <= text.length - 1; i++ ) {
//     if (text[i] === "a") {
//         result += text[i]
//     }
// }

// console.log(result.length)

// 8. returing * instead of some of the emails
// let text = "identitynull@gmail.com"

// for (let i = 0; i <=text.length -1; i++ ) {

// }

// codewars
// 1. Who ate the last cookie?
// function cookie(x) {
//   if (typeof x === "string") {
//     return "Who ate the last cookie? It was Zach!";
//   } else if (typeof x === "number") {
//     return "Who ate the last cookie? It was Monica!";
//   } else {
//     return "Who ate the last cookie? It was the dog!";
//   }
// }

// 2. check whether it need to be plural or not
// function plural(n) {
//   return n !== 1
// }

// 3.

// function sumArray(array) {
//   array.sort((a, b) => a - b).splice(0, 1);
//   array.sort((a, b) => b - a).splice(0, 1);

//   return array.reduce((e,total) => e + total, 0);
// }

// console.log(sumArray([1, -2, 2, 3, 5, 8, 9, 10, 6]));

// Array.isArray()

// 4.
// function towerBuilder(nFloors) {
//   let tower = [];
//   for (let i = 1; i <= nFloors; i++) {
//     let space = " ".repeat(nFloors - i);
//     let star = "*".repeat(2 * i - 1);
//     tower.push(`${space}${star}${space}`);
//   }
//   return tower;
// }

// 5.
// function cleanString(s) {
//   let result = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "#") {
//       if (result.length > 0) {
//         result.pop();
//       }
//     } else {
//       result.push(s[i]);
//     }
//   }

//   return result.join("");
// }
// console.log(cleanString("abc#d##c"))

// 6.

// var runLengthEncoding = function (str) {
//   if (str.length === 0) return [];

//   let result = [];
//   let count = 1;
//   let currentCharacter = str[0];

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === currentCharacter) {
//       count++;
//     } else {
//       result.push([count, currentCharacter]);
//       currentCharacter = str[i];
//       count = 1;
//     }
//   }
//   result.push([count, currentCharacter]);

//   return result;
// };

// console.log(runLengthEncoding("aaaaaaaaaaqwert"));

// 7.

// function multiTable(number) {
//   let table = "";
//   for (let i = 1; i <= 10; i++) {
//     table += `${i} x ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
//   }
//   return table;
// }

// console.log(multiTable(7));

// 8.
// function toUnderscore(string) {
//   if (typeof string === "number") {
//     return String(string);
//   }

//   let result = [];

//   string.split("").forEach((char, index) => {
//     if (
//       index !== 0 &&
//       char === char.toUpperCase() &&
//       char !== char.toLowerCase()
//     ) {
//       result.push("_" + char.toLowerCase());
//     } else {
//       result.push(char.toLowerCase());
//     }
//   });

//   return result.join("");
// }

// 9.
// function stringTransformation(string, transformations) {
//   let result = string;

//   for (let operation of transformations) {
//     if (operation == "U") {
//       result = result.toUpperCase();
//     }

//     if (operation == "L") {
//       result = result.toLowerCase();
//     }

//     if (operation == "R") {
//       result = result.split("").reverse().join("");
//     }

//     if (operation == "D") {
//       result = result
//         .split("")
//         .map((c) => c + c)
//         .join("");
//     }
//   }

//   return result;
// }

// 10.
// function goodVsEvil(good, evil) {
//   let hero = good.split(" ");
//   let heroWorth = [1, 2, 3, 3, 4, 10];
//   let goodTotal = 0;

//   for (let i = 0; i < hero.length; i++) {
//     goodTotal += Number(hero[i]) * heroWorth[i];
//   }

//   let villain = evil.split(" ");
//   let villainWorth = [1, 2, 2, 2, 3, 5, 10];
//   let villainTotal = 0;

//   for (let i = 0; i < villain.length; i++) {
//     villainTotal += Number(villain[i]) * villainWorth[i];
//   }
//   if (villainTotal === goodTotal) {
//     return "Battle Result: No victor on this battle field";
//   } else if (villainTotal > goodTotal) {
//     return "Battle Result: Evil eradicates all trace of Good";
//   } else if (villainTotal < goodTotal) {
//     return "Battle Result: Good triumphs over Evil";
//   }
// }
// console.log(goodVsEvil("1 1 1 1 1", "1 1 1 1 1"));

// 11.
// function highAndLow(numbers) {
//   const sorted = numbers
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const min = sorted[0];
//   const max = sorted[sorted.length - 1];
//   return `${max} ${min}`;
// }

// console.log(highAndLow("1 2 2 45 5 12 21 -12"));

// 12.
// function dontGiveMeFive(start, end) {
//   let count = 0;

//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes("5")) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(dontGiveMeFive(1, 9)); // 8
// console.log(dontGiveMeFive(4, 17)); // 12

// 13.
function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";

  let count = 0;

  for (let i = n; i < m; i+=n) {
    count +=i
  }

  return count;
}
console.log(sumMul(1, 4));
