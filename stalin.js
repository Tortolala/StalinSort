// Ascendent Stalin Sort.

/*
Manual tests:

[2, 6, 2, 9, 2, 8, 39, 23] ==> [2, 6, 9, 39]
[38, 2, 84, 12, 192, 92] ==> [38, 84, 192]
[1, 0, 2, 3, 3, 9, 1, 4, 9] ==> [1, 2, 3, 3, 9, 9]
*/

// var inputList = [2, 6, 2, 9, 8, 39, 23];
var inputList = [38, 2, 84, 12, 192, 92];
// var inputList = [1, 0, 2, 3, 3, 9, 1, 4, 9];
console.log("Unsorted list: ", inputList);

function stalinSort(unsortedList) {
  var sortedList = unsortedList;
  console.log("******** sorting ********");

  /*
  j = i + 1.
  Go trough array:
    j < i, remove j.
    Else, nothing.
  */

  for (i = 0; i < sortedList.length; i++) {
    // console.log("i: ", sortedList[i]);
    // console.log("j: ", sortedList[i + 1]);
    j = i + 1;

    if (sortedList[i] == "x") {
      if (sortedList[j] < sortedList[i - 1]) {
        // sortedList.splice[j];
        sortedList[j] = "x";
      }
    } else {
      if (sortedList[j] < sortedList[i]) {
        // sortedList.splice[j];
        sortedList[j] = "x";
      }
    }

  }

  var result = sortedList.filter(function(number) {
    return number != 'x';
  });

  // console.log(sortedList);
  return result;
}

console.log("Sorted list: ", stalinSort(inputList));
