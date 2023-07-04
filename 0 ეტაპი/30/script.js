function countoc(arr, element) {
    let count = 0;
    for (let i =0; i < arr.length; i++) {
        if(arr[i] == element) {
            count++;
        }
    }
    return count;
}

let array = [1,2,3,4,5,6,4];
let elementcount = 4;
let oc = countoc(array, elementcount);
console.log("გავრცელება", oc);