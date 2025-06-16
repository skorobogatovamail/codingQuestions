const sortEvenNumbers = (arr) => {
  const evenNumbers = [];
  const evenIndices = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
      evenIndices.push(i);
    }
  }

  evenNumbers.sort((a, b) => a - b);

  for (let i = 0; i < evenIndices.length; i++) {
    arr[evenIndices[i]] = evenNumbers[i];
  }

  return arr;
};

console.log(sortEvenNumbers([3, 8, 2, 1, 5, 6, 4, 9, 7]));
