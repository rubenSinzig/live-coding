/* The odd/even reporter. 
   Write a program that will iterate from 0 to 20. For each iteration, it will check 
   if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
*/
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
};


// Write programs that produce the following outputs:

// 100 200 300 400 500 600 700 800 900 1000
for (i = 100; i <= 1000; i++) {
    if (i % 100 == 0) {
        console.log(i);
    }
};

// 0 2 4 6 8 10
for (i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

// 3 6 9 12 15
for (i = 3; i <= 15; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
};

// 9 8 7 6 5 4 3 2 1 0
for (i = 9; i >= 0; i--) {
        console.log(i);
};

// 1 1 1 2 2 2 3 3 3 4 4 4



// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
