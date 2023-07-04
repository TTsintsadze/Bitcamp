let arr = ["ვაშლი", "მსხალი", "ატამი",
          "ატამი", "ვაშლი", "მსხალი"];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
 
console.log(removeDuplicates(arr));