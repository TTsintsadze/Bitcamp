function calculate(arr) {
    let sum = 0;
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if(typeof arr[i] == `number`) {
            sum += arr[i];
            count++;
        }
    }
    //აკრძალვა 0ის
    if(count == 0){
        return 0;
    }
    const average = sum / count;
    return average;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = calculate(numbers);
console.log(`ჯამი: ${result}`);