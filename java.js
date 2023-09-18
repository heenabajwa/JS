// UNICODE TO SEE THE ORDER OF DIFFERENT THINGS IN JS
//console.log(3+4);
// console.error("oh noo!!");
//example1

// if(1===1){
// console.log("it's true")
// }

// example2

// let rating = 21;
//  if (rating===3) {
//     console.log("you are a superstar")
// }
// else if(rating===2) {
//     console.log("Meets expectation")
// }
// else if(rating===1) {
//     console.log("You need Improvement")
// }
// else {
//     console.log("invalid rating!")
// }

// example 3 

// let num = 33;
// if (num % 2 !== 0)
// console.log("odd number")

// example 4 if else

// let highScore = 1430;
// let userScore = 1700;
// if(userScore >= highScore){
//     console.log(`Congratulations!!! you have the new high score of ${userScore}`);
//     highScore = userScore;
// }
// else{
//     console.log(`Good game your score of ${userScore} did not beat the high score of ${highScore}`);
// }

//example5 nested if nested else

// let password = "liohbjfgkitty"
// if (password.length >= 6){
//     if (password.indexOf(" ") === -1){
//         console.log("valid Password")
//     }
//     else{
//         console.log("Password is Long enough, but cannot contain spaces")
//     }
// }
// else{
//     console.log("Password must be longer")
// }

//examolke 6 &&

// let password = "jedbhlkjiyjljui";
// if (password.length >= 8 && password.indexOf(" ") === -1) {
// console.log("valid Password");
// }
// else{
//     console.log("Password must be longer");
// }

//example 7

// let num = 3;
// if (num >= 1 && num <= 10){
//     console.log("number is between 1 and 10")
// }
// else{
//     console.log("Please guess a number between 1 and 10")
// }

// example 8 or  || opperator pipe character one of the two sides is true

// let age = 30
// if (age < 6 || age >= 65){
//     console.log("You get in for free")
// }
// else{
//     console.log("you must pay!")
// }

// EXAMPLE 9 not opperator !

// let loggedInUser
// //if user is not logged in
// if(!loggedInUser) {
//     console.log("GET OUT OF HERE");
// }
// let flavor = "WATERMELLON";
// if(flavor !== "grape" || flavor !== "cherry") {
//     console.log("WE DONT HAVE THAT FLAVOR");
// }

//EXERCISE 10

// let day = 6;
// if (day === 1) {
//     console.log ("Monday");
// }
// else if (day === 2) {
//     console.log ("Tuesday");
// }
// else if (day === 3) {
//     console.log ("Wednesday");
// }
// else if (day === 4) {
//     console.log ("Thursday");
// }
// else if (day === 5) {
//     console.log ("Friday");
// }
// else if (day === 6) {
//     console.log ("Saturday");
// }
// else if (day === 7) {
//     console.log ("Sunday");
// }
// else {
//     console.log ("Invalid");
// }

//exercise for switch

// let day = 9
// switch(day){
//     case 1:
//          console.log ("Monday")
//          break;
//     case 2:
//         console.log ("Tuesday")
//         break;
//     case 3:
//         console.log ("Wednesday")
//         break;
//     case 4:
//         console.log ("Thursday")
//         break;
//     case 5:
//         console.log ("Friday")
//         break;
//     case 6:
//         console.log ("Saturday")
//         break;
//     case 7:
//         console.log ("Sunday")
//        break;
//        default:
//         console.log ("Invalid number")
// }

// ternary operator
//  let num = 7;
// if( num === 7){
//     console.log("lucky!");
// }
// else{
//     console.log("bad!");
// }
// num === 7 ? console.log("lucky!") :  console.log("bad!");

// next example

// let user = "offline"
// let color;
// if (user = "offline"){
//         console.log(color = "red");
// }
// else{
//     console.log( color = "green");
// }

// let tus = "online";
//  color = tus ==="offline" ? console.log( color = "green") : console.log( color = "red");

// arrays []

let shopingList = ['butter', 'ice', 'chicken', 'cereals'] 

let lotto = [23, 69, 1546, 789, 465]

let myCollection = ['dogs', 'cats', 67, 90.5678]
//  change a value in array

shopingList[0] = 'corn';
shopingList[1] = 'oil';
//  to add things at the end of array
shopingList[shopingList.length] = 'tomatoes';

let topSongs = [
    'First time ever i saw youe face',
    'God only knows',
    'A day in the life',
    'life on mars'
];
//.push is used to add a new value at  the end
topSongs.push('Fortunate son');
// .pop is usesd to remove a value from the end
const nextSong = topSongs.pop()



