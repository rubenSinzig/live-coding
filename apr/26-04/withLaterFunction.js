const arr = [];
const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  arr.unshift(userData);
  // Checking my input if it has a text
  if (userData != "") {
    drawList();
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToList);
const drawList = () => {
  document.querySelector(".result").innerHTML = "";
  arr
    .map((item) => {
      const newLi = document.createElement("li");
      const newContainer = document.createElement("div");
      const doneButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const laterButton = document.createElement("button");
      const text = document.createTextNode(item);
      newLi.appendChild(text);
      newLi.style.color = colorGen();
      document.querySelector(".result").appendChild(newLi);
      doneButton.innerHTML = "✓";
      deleteButton.innerHTML = "✗";
      laterButton.innerHTML = "⎈";
      newContainer.appendChild(doneButton);
      newContainer.appendChild(deleteButton);
      newContainer.appendChild(laterButton);
      doneButton.classList.add("done");
      newLi.appendChild(newContainer);
      deleteButton.addEventListener("click", () => del(item));
      doneButton.addEventListener("click", () =>
        newLi.classList.toggle("completed")
      );
      laterButton.addEventListener("click", () => later(item));
    })
    .join("");
};

const del = (item) => {
  arr.splice(arr.indexOf(item), 1);
  drawList();
};

const later = (item) => {
  arr.splice(arr.indexOf(item), 1);
  arr.push(item);
  drawList();
};
