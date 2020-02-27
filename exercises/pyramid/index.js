// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// number of blocks = 2n - 1

function pyramid(n, row = 0, blocks = '') {
  const columnLength = 2 * n - 1;
  const midIndex = Math.floor(columnLength / 2);
  if (row === n) {
    return;
  }

  if (blocks.length === columnLength) {
    console.log(blocks);
    return pyramid(n, ++row);
  }

  if (blocks.length >= midIndex - row && blocks.length <= midIndex + row) {
    blocks += '#';
  } else {
    blocks += ' ';
  }
  return pyramid(n, row, blocks);
}

// function pyramid(n) {
//   const columnLength = 2 * n - 1;
//   const minIndex = Math.floor(columnLength / 2);
//   for (let rowIndex = 0; rowIndex < n; rowIndex++) {
//     let blocks = '';
//     for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
//       if (
//         columnIndex >= minIndex - rowIndex &&
//         columnIndex <= minIndex + rowIndex
//       ) {
//         blocks += '#';
//       } else {
//         blocks += ' ';
//       }
//     }
//     console.log(blocks);
//   }
// }

module.exports = pyramid;
