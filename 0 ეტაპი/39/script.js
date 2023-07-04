function removeFalseValues(array) {
    return array.filter(function(element) {
      return element !== false;
    });
  }
  
  const arr = [false, true, false, 'hello', false, 59, "world"];
  
  const filteredArray = removeFalseValues(arr);
  console.log(filteredArray);
  