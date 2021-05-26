import { Text, Hallo } from "./components/Text";
let name = "Hadi";
const names = ["Zain", "Olga", "Nancy"];
const listItems = names.map((name, i) => <li key={i}>{name}</li>);
function App() {
  return (
    <div>
      <h1>Hi I am React</h1>
      <Hallo userName={name} age="31" namesArr={names} />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <ul>{listItems}</ul>

      {
        //   <ul>
        //names.map((name, i) => (
        //   <li key={i}>{name}</li>
        // ))
        //  </ul>
      }
    </div>
  );
}

export default App;
