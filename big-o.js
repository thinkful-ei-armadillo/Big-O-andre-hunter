'use strict';

// function jumpingSheep(num) {
//   for (let i = num; i >= 0; i--) {
//     if (i === 0) {
//       console.log('All sheep jumped over the fence');
//     } else {
//       console.log('Another sheep jumps over the fence');
//     }
//   }
// }

// console.log(jumpingSheep(3));

// function power(num) {
//   console.log(Math.pow(10, num));
// }

// console.log(power(3));

// function reverse(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[str.length - 1 - i]);
//   }
//   return arr.join('');
// }

// console.log(reverse('hunter'));

// function makeTri(num) {
//   for (let i = 1; i < num; i++) {
//     console.log(' '.repeat(num - i), '* '.repeat(i));
//   }
// }

// console.log(makeTri(6));


// function strSplitter(str, seperator = '/') {
//   let arr = [];

//   for(let i = 0; i < str.length; i++) {
//     if(str[i] !== seperator) {
//       arr.push(str[i]);
//     }
//   }

//   return arr.join('');
// }

// console.log(strSplitter('02/20/2020'));

// function fibonacci(n) {
//   let arr = [];
//   let val = 1;

//   for(let i = 0; i < n; i++) {
//     if(arr.length < 2) {
//       arr.push(val);
//     } else {
//       val = arr[i - 1] + arr[i - 2];
//       arr.push(val);
//     }
//   }

//   return arr;
// }

// console.log(fibonacci(10));

// function factorial(n) {
//   let val = n;

//   for(let i = n - 1; i > 0; i--) {
//     val = val * i;
//   }

//   return val;
// }

// console.log(factorial(5));

/* from, buffer, and to are the 3 pegs */
function hanoi(disks, from, buffer, to) {
  if(disks === 1) {
    console.log(`moving disk 1 from ${from} to ${to}`);
    return true;
  }

  hanoi(disks - 1, from, buffer, to);
  console.log(`moving disk ${disks} from ${from} to ${to}`);
  hanoi(disks - 1, buffer, from, to);
}

hanoi(2, 'A', 'B', 'C');
