var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1,2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4,1, 'Pria', 'SMA Internasional Metro')
    var date = input[3].split("/");
    var month = date[1];
    var bulan = '';
    switch (parseInt(month)) { //perseInt() method digunakan untuk menguraikan string dan memgembalikannya ke integer.
        case 1: 
            bulan = 'Januari';
            break;
        case 2:
            bulan = 'Februari';
            break;
        case 3:
            bulan = 'Maret';
            break;
        case 4:
            bulan = 'April';
            break;
        case 5:
            bulan = 'Mei';
            break;
        case 6:
            bulan = 'Juni';
            break;
        case 7:
            bulan = 'Juli';
            break;
        case 8:
            bulan = 'Agustus';
            break;
        case 9:
            bulan = 'September';
            break;
        case 10:
            bulan = 'Oktober';
            break;
        case 11:
            bulan = 'November';
            break;
        case 12:
            bulan = 'Desember';
            break;
    }
    console.log(input);
    console.log(bulan);

    date.sort(function(a, b){return b-a});
    console.log(date);

    date = input[3].split('/');
    console.log(date.join('-'));
    
    name = input[1].split(' ');
    console.log(`${name[0]} ${name[1]}`);
}

dataHandling2(input);