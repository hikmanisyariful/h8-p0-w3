function groupAnimals(animals) {
  // you can only write your code here!
   
    hewanA = [];
    hewanB = [];
    hewanC = [];
    hewanD = [];
    hewanE = [];
    hewanF = [];
    hewanG = [];
    hewanH = [];
    hewanI = [];
    hewanJ = [];
    hewanK = [];
    hewanL = [];
    hewanM = [];
    hewanN = [];
    hewanO = [];
    hewanP = [];
    hewanQ = [];
    hewanR = [];
    hewanS = [];
    hewanT = [];
    hewanU = [];
    hewanV = [];
    hewanW = [];
    hewanX = [];
    hewanY = [];
    hewanZ = [];


    var alfaAnimals =[];
    for (var j = 0; j < animals.length; j++) {
        if (animals[j][0] === 'a') {
            hewanA.push(animals[j]);
        } else if (animals[j][0] === 'b') { 
            hewanB.push(animals[j]);  
        } else if (animals[j][0] === 'c') {
            hewanC.push(animals[j]);
        } else if (animals[j][0] === 'd') { 
            hewanD.push(animals[j]);  
        } else if (animals[j][0] === 'e') { 
            hewanE.push(animals[j]);  
        } else if (animals[j][0] === 'f') { 
            hewanF.push(animals[j]);  
        } else if (animals[j][0] === 'g') { 
            hewanG.push(animals[j]);  
        } else if (animals[j][0] === 'h') { 
            hewanH.push(animals[j]);  
        } else if (animals[j][0] === 'i') { 
            hewanI.push(animals[j]);  
        } else if (animals[j][0] === 'j') { 
            hewanJ.push(animals[j]);  
        } else if (animals[j][0] === 'k') { 
            hewanK.push(animals[j]);  
        } else if (animals[j][0] === 'l') { 
            hewanL.push(animals[j]);  
        } else if (animals[j][0] === 'm') { 
            hewanM.push(animals[j]);  
        } else if (animals[j][0] === 'n') { 
            hewanN.push(animals[j]);  
        } else if (animals[j][0] === 'o') { 
            hewanO.push(animals[j]);  
        } else if (animals[j][0] === 'p') { 
            hewanP.push(animals[j]);  
        } else if (animals[j][0] === 'q') { 
            hewanQ.push(animals[j]);  
        } else if (animals[j][0] === 'r') { 
            hewanR.push(animals[j]);  
        } else if (animals[j][0] === 's') { 
            hewanS.push(animals[j]);  
        } else if (animals[j][0] === 't') { 
            hewanT.push(animals[j]);  
        } else if (animals[j][0] === 'u') { 
            hewanU.push(animals[j]);  
        } else if (animals[j][0] === 'v') { 
            hewanV.push(animals[j]);  
        } else if (animals[j][0] === 'w') { 
            hewanW.push(animals[j]);  
        } else if (animals[j][0] === 'q') { 
            hewanQ.push(animals[j]);  
        } else if (animals[j][0] === 'y') { 
            hewanY.push(animals[j]);  
        } else if (animals[j][0] === 'z') { 
            hewanZ.push(animals[j]);  
        } 
    }
    alfaAnimals.push(hewanA);  
    alfaAnimals.push(hewanB);
    alfaAnimals.push(hewanC); 
    alfaAnimals.push(hewanD);  
    alfaAnimals.push(hewanE);
    alfaAnimals.push(hewanF);
    alfaAnimals.push(hewanG);  
    alfaAnimals.push(hewanH);
    alfaAnimals.push(hewanI);
    alfaAnimals.push(hewanJ);  
    alfaAnimals.push(hewanK);
    alfaAnimals.push(hewanL);
    alfaAnimals.push(hewanM);  
    alfaAnimals.push(hewanN);
    alfaAnimals.push(hewanO);
    alfaAnimals.push(hewanP);  
    alfaAnimals.push(hewanQ);
    alfaAnimals.push(hewanR);
    alfaAnimals.push(hewanS);  
    alfaAnimals.push(hewanT);
    alfaAnimals.push(hewanU);
    alfaAnimals.push(hewanV);  
    alfaAnimals.push(hewanW);
    alfaAnimals.push(hewanQ);  
    alfaAnimals.push(hewanY);  
    alfaAnimals.push(hewanZ);

   // console.log(alfaAnimals.length);

    var hasil = [];
    for (var i = 0; i < alfaAnimals.length; i++) {
        if (alfaAnimals[i].length !== 0) {
            hasil.push(alfaAnimals[i]);
        }   
    }
    //console.log(alfaAnimals[1]);

  return hasil;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]