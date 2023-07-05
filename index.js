function tentukanDeretGeometri(deret) {
  if (deret.length < 3) {
    return false;
  }

  let rasio = deret[1] / deret[0];

  for (let i = 0; i < deret.length - 1; i++) {
    let rasioSkrg = deret[i + 1] / deret[i];

    if (rasio !== rasioSkrg) {
      return false;
    }
  }

  return true;
}

function mengelompokkanAngka(arr) {
  let ganjil = [];
  let genap = [];
  let kel3 = [];

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];

    if (angka % 3 == 0) {
      kel3.push(angka);
    } else if (angka % 2 == 0) {
      genap.push(angka);
    } else {
      ganjil.push(angka);
    }
  }

  return [genap, ganjil, kel3];
}

function sittingArrangement(person, column) {
  if (column < 1) {
    return "Invalid number";
  }

  let result = [];
  let countPeople = 0;

  for (let i = 0; i < person.length / column; i++) {
    result.push([]);
    for (let j = countPeople; j < person.length; j++) {
      result[i].push(person[j]);
      countPeople++;
      if (countPeople % column === 0) {
        break;
      }
    }
  }

  return result;
}

function ladder(word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let tempLadder = []
    for (let j = 0; j < word.length - i; j++) {
      tempLadder.push(word[j])
    }
    result.push(tempLadder);
  }

  return result
}

function targetTerdekat(arr) {
    
}
