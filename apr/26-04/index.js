// document.write("Hi I am text");
//document.write("<h1> Hi h1>");

const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    // const listItems = document.querySelectorAll("li");
    // listItems.forEach((item) => {
    //   item.style.color = colorGen();
    // });
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};

const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
