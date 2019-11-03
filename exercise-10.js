function perkalianUnik(arr) {
  // you can only write your code here!
  var multiple;
  var hasil = [];
    for (var i = 0; i < arr.length; i++) {
      var total = 1;
      for (var j = 0; j < arr.length; j++) {
        total = total * arr[j];
      }
      //console.log(total);
      multiple = total/arr[i]; 
      //console.log(multiple);
      hasil.push(multiple);
    }
    //console.log(multiple);
 // console.log(total);
    return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]