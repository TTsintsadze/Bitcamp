function removeelement(arr, element) {
    const index = arr.indexOf(element);
    if(index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

const array = [1,2,3,4,5,6,7,8];
const elementremove = 4;
const newarray = removeelement(array, elementremove);
console.log(newarray);