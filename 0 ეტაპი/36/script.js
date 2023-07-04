function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
      return "უნდა შეიცავდეს მინ 2 ციფრს";
    }
    let max = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
    if (secondMax === -Infinity) {
      return "მასივში მეორე უდიდესი რიცხვი არ არის";
    }
    return secondMax;
}
let myArray = [5, 15, 12, 14, 11, 5, 2];
let secondLargest = findSecondLargestNumber(myArray);
console.log("წინა ციფრი:", secondLargest);
  