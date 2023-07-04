function calculate(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        if(typeof arr[i] == `number`) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [1,2,3];
const result = calculate(numbers);
console.log(`ჯამი: ${result}`);