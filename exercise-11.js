function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisih = [];


    for (var i = 0; i < arr.length -1 ; i++) {
        selisih.push(arr[i+1] - arr[i]);
    }
   // console.log(selisih)
    if (selisih[0] === selisih[selisih.length-1]) {
        nilai = true;
    } else {
        nilai = false;
    }
    

    return nilai;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false