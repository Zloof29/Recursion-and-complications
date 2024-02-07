// $('[type="submit"]').hover(function() {
//     $('[type="text"]').val('nir@hagever');
//     $('[type="password"]').val('nir12345');
// });

const array = [1, 2, 3, 4, 5];

let searchMissingNumber = function(array) {
    const number = array.length + 1;
    const sum = (number * (number + 1)) / 2;

    let newSum = 0;
    array.forEach(number => {
        newSum += number;
    });

    return sum - newSum;
}

console.log(searchMissingNumber(array));

