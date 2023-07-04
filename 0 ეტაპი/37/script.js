function arrareeqaul(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
const array3 = [1,2,3,4,5];

console.log("1 და 2 მასივები ტოლია", arrareeqaul(array1, array2));
console.log("1 და 3 მასივები ტოლია", arrareeqaul(array1, array3));