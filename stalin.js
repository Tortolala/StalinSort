// Ascendent Stalin Sort.

/*
Manual tests:

[2, 6, 2, 9, 2, 8, 39, 23] ==> [2, 6, 9, 39]
[38, 2, 84, 12, 192, 92] ==> [38, 84, 192]
[1, 0, 2, 3, 3, 9, 1, 4, 9] ==> [1, 2, 3, 3, 9, 9]
*/

var inputList = [2, 6, 2, 9, 8, 39, 23];
console.log("Unsorted list: ", inputList);

function stalinSort(unsortedList) {
  var sortedList = [];
  console.log("******** sorting ********");

  /*
  Agarrar desde 1 hasta n en contador i.
  Agarrar i + i en contador j.
  Recorrer la lista completa mientras que:
    Si j es menor que i, se elimina j.
    Else, nada.
  */

  for (i = 0; i < unsortedList.length; i++) {
    console.log("i: ", i);
    console.log("j: ", i + 1);
  }

  return sortedList;
}

console.log("Sorted list: ", stalinSort(inputList));
