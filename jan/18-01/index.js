// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("-------");
for (let i = 0; i <= 5; ) {
  console.log(i);
  i++;
}
console.log("-------");
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the sky`);
  } else {
    console.log(`there are ${i} stars in the sky`);
  }
}

for (let i = 5; i > 0; i--) {
  console.log(`i is now ${i}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${i * 4}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`this is Multi table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}  = ${i * j}`);
  }
  console.log("-------");
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  }
}
// other way to do so
for (let i = 0; i <= 10; ) {
  console.log(`${i} is even`);
  i += 2;
}

// for (let i = 0; i <= 10; i++) {
//   console.log(i % 2 == 0 ? `${i} is even` : "");
// }

const images = ["😎", "🤓", "🙄"];
const likes = [22, 344, 666];
console.log(`
this image 
got likes

`);
