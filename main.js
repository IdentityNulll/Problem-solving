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
