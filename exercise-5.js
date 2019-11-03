function palindrome(kata) {
    // you can only write your code here!
    var index = kata.length - 1;
    var balikKata = '';
    for (var i = index ; i >= 0; i-- ) {
        balikKata += kata[i];
    }
    if (kata === balikKata) {
        nilai = true;
    } else {
        nilai = false;
    }
    return nilai;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false