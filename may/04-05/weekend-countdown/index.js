const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
const date = new Date();
const checkNow = document.querySelector("#checkNow");
document.querySelector("h2").innerHTML = "Hey, This is the weekend finder app";
// const options = { weekday: 'long' };

// console.log(event.toLocaleDateString('de-DE', options));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// "fr-FR"
// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
const getDayName = () => {
  return date.toLocaleDateString("en-EN", {
    weekday: "long",
  });
};

function weekend(e) {
  e.preventDefault();
  const userName = document.querySelector("#userName").value;
  const result = document.querySelector(".result");
  if (userName != "") {
    let daysLeft = 5 - date.getDay();
    console.log(daysLeft);
    let text = "";
    if (daysLeft > 0) {
      text = `${daysLeft} days let till weekend`;
    } else {
      text = `and it's already weekend. Enjoy your party 🎉`;
    }
    result.innerHTML = `Hey ${userName}, Today is ${getDayName()}, ${text}`;
  } else {
    document.querySelector("#userName").placeholder = "Do it now";
  }
}

checkNow.addEventListener("click", weekend);
