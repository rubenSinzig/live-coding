// Blocking vs Non-Blocking code

// blacking code(loops, console.log, loading files )

// Blocking code
// console.log("Hi");
// console.log("cool");
// Non-blocking code
window.setTimeout(() => {
  console.log("Hi There");
}, 100);
console.log("I can run first");

let x = 33;
console.log(x);
// Promises
// Promises are very similar to callbacks but they are a little bit clean on writing
// Promises are the best solution if you want to do something that takes a long time to be done and you don't want your app to wait for it to be done, so it will work on the background, Like downloading an image or a video from another server

const checkPromise = new Promise((resolve, reject) => {
  let x = true;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry, it's not cool");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })
  // .then((obj) => {
  //   console.log(`step 2 ${obj}`);
  // })
  // .then((result) => {
  //   console.log(`step 3 ${result}`);
  // })
  .catch((err) => {
    console.log(`I am catch and ${err}`);
  });
console.log("Hi, I am Hadi");
// Promisify setTimeout

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let ms = 3000;
function doSomething() {
  let text = document.querySelector(".text");
  text.innerHTML = `it took me ${ms}ms to be done.`;
}

delay(ms).then(doSomething);
