
function findsmallest(arr, element){
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
const numbers = [10, 25, 8, 50, 3];
const smallestNumber = findsmallest(numbers);
console.log("დაბალი ციფრი:", smallestNumber);



  