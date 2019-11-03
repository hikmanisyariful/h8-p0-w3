function pasanganTerbesar(num) {
  // you can only write your code here!
  /*angka = num.toString();
  value = angka.split(''); // coba gak pake built in
  
    var newArr = [];
  //['1','2','3','4','5']
  for (var i = 0; i < value.length - 1; i++) {
    //console.log(i);
    //console.log(value[i]);
    //console.log(value[i+1]);
    newArr[i] = value[i] + value[i+1];
    //console.log(value[i]);
    //console.log(value);

  }
  newArr.sort();
  var highValue = newArr[newArr.length-1];
  return highValue;*/

    angka = num.toString(); // tidak ditekankan dilakukan manual
    var number= '';
    var arr = [];
    for (var i = 0; i < angka.length; i++) {
        number += angka[i];
        arr.push(number);
        number= '';
    }

    var newArr = [];

    for (var j = 0; j < arr.length - 1; j++) {
      //console.log(i);
      //console.log(value[i]);
      //console.log(value[i+1]);
      newArr[j] = arr[j] + arr[j+1];
      //console.log(value[i]);
      //console.log(value);
    }

    for (var i = 0; i < newArr.length; i++) {
        newArr[i] = parseInt(newArr[i])
    }
    
    var input = newArr;
    //console.log(input);
    //console.log(input[0])
    for (var k = 0; k < input.length; k++) {
        for (var l = 0; l < input.length; l++) {
            if (input[l] > input[l+1]) {
                var temp = input[l];
                input[l] = input[l+1];
                input[l+1] = temp;
            };

        }
    }

    var highValue = input[input.length-1];    

    return highValue;
    

}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99 
