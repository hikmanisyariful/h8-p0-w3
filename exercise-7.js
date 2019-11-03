function hitungJumlahKata(kalimat) {
    // you can only write your code here!
   /* var kata = kalimat.split(' ');
    var jumlah = kata.length;
    return jumlah; */
  /*  var spasi = '';
    var kata = '';
    var arr = []
   ./* for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            spasi += kalimat[i];
        }
    }
    console.log(spasi.length);
    index = spasi.length;
    for (var j = 0; j <= index; j++) {
        for (var k = 0; k < kalimat.length; k++) {
            if (kalimat[i] !== ' ') {
                kata += kalimat[i];
            } else {
                kata += kalimat[i];
            }
            arr[j] += kata;
        }
    }
    return arr; */

    var kata = '';
    var arr = [];
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ') {
            kata += kalimat[i];
            if (i === kalimat.length-1) { // membandingkan posisi jangan bandingkan value dari kalimat[i];
            arr.push(kata);}
        }else {
            arr.push(kata);
            kata='';
        }
    }
   //console.log(arr);
    jumlah = arr.length;
    return jumlah; 
  }
  


  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5