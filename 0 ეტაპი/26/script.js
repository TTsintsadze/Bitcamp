
function findlargest(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const numbers = [10, 25, 8, 50, 3];
const largestNumber = findlargest(numbers);
console.log("მაღალი ციფრი:", largestNumber);



  