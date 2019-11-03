function angkaPalindrome(num) {
    // you can only write your code here!
    
    var angka = num.toString();
    var index = angka.length - 1;
    var balikAngka = '';
    for (var i = index; i >= 0; i--) {
        balikAngka += angka[i];
    }

    if (angka.length === 1) {
        angka = (num + 1).toString();

    } else {
        while (angka !== balikAngka) {
            num++;
            var angka = num.toString();
            var index = angka.length - 1;
            var balikAngka = '';
            for (var i = index; i >= 0; i--) {
            balikAngka += angka[i];
            }
        }
    }


    return angka;

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001