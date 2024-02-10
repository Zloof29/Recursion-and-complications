// $('[type="submit"]').hover(function() {
//     $('[type="text"]').val('nir@hagever');
//     $('[type="password"]').val('nir12345');
// });

// let btnSubmit = document.querySelector('input[type="submit"]');
// let userName = document.querySelector('input[type="text"]');
// let userPass = document.querySelector('input[type="password"]');

// btnSubmit.addEventListener('mouseover', function(){
//     userName.value = "nir@hagever.com";
//     userPass.value = "nir12345";
// });

// const array = [1, 2, 3, 4, 5];

// let searchMissingNumber = function(array) {
//     const number = array.length + 1;
//     const sum = (number * (number + 1)) / 2;

//     let newSum = 0;
//     array.forEach(number => {
//         newSum += number;
//     });

//     return sum - newSum;
// }

// console.log(searchMissingNumber(array));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let binarySearch = function(array, number, start = 0, end = array.length) {
//     if(start > end) {
//         return false;
//     }

//     const middle = Math.floor((start + end) / 2);

//     if(array[middle] === number) {
//         return middle;
//     } else if(array[middle] > number) {
//         return binarySearch(array, number, start, middle - 1);
//     } else {
//         return binarySearch(array, number, middle + 1, end);
//     }

// }

// console.log(binarySearch(array, 6));

// const array = [15, 24, 5, 9, 2, 4, 1, 3, 10];

// const bubbleSort = function (array) {
//     for (let index = 0; index < array.length - 1; index++) {
//         for (let j = 0; j < array.length - 1 - index; j++) {
//             if(array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSort(array));

// const array = [15, 24, 5, 9, 2, 4, 1, 3, 10];

// const bubbleSort = function (array) {
//     for(let i = 0; i < array.length - 1; i++) {
//         for(let j = 0; j < array.length - 1 - i; j++) {
//             if(array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSort(array));