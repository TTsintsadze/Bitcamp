function SheicavsCifrs(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage
  const numbers = [10, 5, 8, 20, 3];
  const searchElement = 3;
  const contains = SheicavsCifrs(numbers, searchElement);
  console.log("შეიცავს", searchElement + ":", contains);
  