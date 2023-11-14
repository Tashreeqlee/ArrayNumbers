function displayMiddleNumber(numbersArray) {
    const middle = numbersArray.length / 2;
    if (numbersArray.length % 2 === 0) {
        return [numbersArray[middle - 1], numbersArray[middle]];
    } else {
        return numbersArray[Math.floor(middle)];
    }
}

// Array of numbers
let numbers = [12, 18, 11, 5, 8, 2];
console.log(displayMiddleNumber(numbers));