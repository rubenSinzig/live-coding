// Creat a constructor function that receive product details
// (productName,prise,inventory) then build a method to display this data
// in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. We have 2232 in our store.
// function Product(productName, price, inventory) {
//   //   this.productName = productName,
// }
// console.log(productDetails("Pepsi", 2.33, 2232));
// get & set
// create a car object that uses getter and setter method to get and set
// the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data
//
// TV app
class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    } else {
      console.log("100 is max");
    }
  }
  decVolume() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("Mute");
    }
  }
  reset() {
    this.volume = 10;
    this.channel = 1;
  }
}
const samsung = constructor("SAMSUNG", 75, 15);
