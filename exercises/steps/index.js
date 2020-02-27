// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stairs = '') {
  if (row === n) {
    return;
  }

  if (n === stairs.length) {
    console.log(stairs);
    return steps(n, row + 1);
  }

  if (stairs.length <= row) {
    stairs += '#';
  } else {
    stairs += ' ';
  }
  return steps(n, row, stairs);
}

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stairs = '';
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stairs += '#';
//       } else {
//         stairs += ' ';
//       }
//     }
//     console.log(stairs);
//   }
// }

module.exports = steps;
