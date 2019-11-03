
var input ='hello world!';

function balikString(input) {
    var index = input.length - 1;
    balik = ''
    for (var i = index; i >= 0; i--) {
        balik += input[i];
    }
    return balik;
}

console.log(balikString(input));

