function targetTerdekat(arr) {
    // you can only write your code here!
    spasi = 0;
    huruf = '';
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === ' ') {
            arr[i] = 1
            spasi += arr[i];
            if (i === arr.length-1) {
                newArr.push(spasi);
            }
        } else {
            newArr.push(spasi);
            huruf += arr[i];
            newArr.push(huruf);
            spasi = 0;
            huruf ='';
        }
        //console.log(spasi);
    }
  // console.log(newArr);
    var hasil;

    for (var j = 1; j <= (newArr.length - 2); j += 2) {
        if ((newArr[j] === 'o' && newArr[j+2] === 'x') || (newArr[j] === 'x' && newArr[j+2] === 'o')) {
            hasil = newArr[j+1] + 1;     
        } else if ((newArr[j] === 'o' && newArr[j-2] === 'x') || (newArr[j] === 'x' && newArr[j-2] === 'o')) {
            hasil = newArr[j-1] + 1;
        } else if ((newArr[j] === 'o' && newArr[j+2] === undefined)  || (newArr[j] === 'x' && newArr[j+2] === undefined)) {
            hasil = 0;
        } 
    } 

    return hasil;

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2