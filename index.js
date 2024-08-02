//  __________________________/ forEach metodiga oid masalalar \__________________________
// // 1-masala
// const numbers = [1, 2, 3, 4];
// function double(arg) {
//     const arr = [];
//     arg.forEach(function (v) {
//         arr.push(v * 2);
//     });
//     return arr;
// }

// let res = double(numbers);
// console.log(res);

// 2-masala
// const words = ['apple', 'banana', 'cherry'];

// function caseWords(arr) {
//     let result = [];
//     arr.forEach(function(v) {
//         result.push(v.toUpperCase());
//     });
//     return result;
// }

// let res = caseWords(words);
// console.log(res);

// // 3-masala
// const numbers = [10, 20, 30, 40];
// function increasefive(arr) {
//     let result = [];
//     arr.forEach(function (v) {
//         result.push(v *= 5)
//     });
//     return result;
// }console.log(increasefive(numbers));

// 4-masala
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ];
  
//   function printStudent(arr) {
//       let result = [];
//       arr.forEach(function(student) {
//           result.push(`${student.name}: ${student.grade}`);
//       });
//       return result;
//   }
  
//   let res = printStudent(students);
//   console.log(res);


// ______________________/ Map metodiga oid masalalar \______________________
// 1-masala
// const numbers = [1, 2, 3, 4];
// function double(arg) {
//     const arr = arg.map(num => num * 2)
//     return arr
// } let res = double(numbers);
//     console.log(res);

// // 2-masala
// const words = ['apple', 'banana', 'cherry'];
// function uppercase(arg) {
//     const arr = arg.map(num => num.toUpperCase());
//     return arr;
// }   let res = uppercase(words);
//     console.log(res);

// // 3-masala
// const numbers = [10, 20, 30, 40];
// function addFive(arg) {
//     const arr = arg.map(num => num + 5);
//     return arr;
// }   let res  = addFive(numbers);
//     console.log(res);

// // 4-masala
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
// ];

// function increaseTen(arg) {
//     const arr = arg.map(student => {
//         return {
//             name: student.name,
//             grade: student.grade + 10
//         };
//     });
//     return arr;
// }   let res = increaseTen(students);
//     console.log(res);



// ________________________/ filter metodiga oid masalalar \________________________

// // 1-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// function evenNum(arg) {
//     const arr = arg.filter(num => num % 2 === 0);
//     return arr;
// }    let res = evenNum(numbers);
//     console.log(res);
    
// // 2-masala
// const words = ['apple', 'banan', 'cherry', 'date'];
// function lengthFive(arg) {
//     const arr = arg.filter(num => num.length === 5);
//     return arr;
// }   let res = lengthFive(words);
//     console.log(res);

// // 3-masala
// const ages = [12, 17, 18, 19, 21];
// function overEighteen(arg) {
//     const arr  = arg.filter(num => num > 18);
//     return arr;
// }   let res = overEighteen(ages);
//     console.log(res);
    
// // 4-masala
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];
// function overeIghty(arg) {
//     const arr = arg.filter(students => students.grade > 80)
//     return arr;
// }   let res = overeIghty(students);
//     console.log(res);


// // __________________/ find metodiga oid masalalar \__________________
// // 1-masala
// const numbers = [4, 9, 11, 2, 18];
// function findElement(arg) {
//     const arr = arg.find(num => num == 11);
//     return arr;
// }   let res = findElement(numbers);
//     console.log(res);

// // 2-masala
// const students = [
//     {name: 'Ali', grade: 80},
//     {name: 'Vali', grade: 90},
//     {name: 'Hasan', grade: 78},
//     {name: 'Olim', grade: 85}
//   ];
// function findBall(arg) {
//     const arr = arg.find(num => num.grade > 80)
//     return arr;
// }   let res = findBall(students);
//     console.log(res);


// ___________________/ some/every metodiga oid masalalar \___________________
// // 1-masala
// const numbers = [-1, -2, 3, -4];
// function someNum(arg) {
//     const arr = arg.some(num => num > 0);
//     return arr;
// }   let res = someNum(numbers);
//     console.log(res);
    
// // 2-masala
// const words = ['cat', 'dog', 'elephant'];
// function someWord(arg) {
//     const arr = arg.some(num => num.length > 5);
//     return arr;
// }   let res = someWord(words);
//     console.log(res);

// // 3-masala
// const numbers = [1, 2, 3, 4];
// function everyNum(arg) {
//     const arr = arg.every(num => num > 0)
//     return arr;
// }   let res = everyNum(numbers);
//     console.log(res);

// // 4-masala
// const students = [
//     {name: 'Ali', grade: 60},
//     {name: 'Vali', grade: 70},
//     {name: 'Hasan', grade: 80}
//   ];

//   function everyBal(arg) {
//     const arr = arg.every(num => num.grade > 50);
//     return arr;
//   } let res = everyBal(students);
//   console.log(res);
  


    