const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
const date = new Date();
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

console.log(getDayName());
