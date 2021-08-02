// case 1
//const Gallery = (props) => {
//   console.log(props.Data);
// case 2
// const Gallery = ({ Data }) => {
//   console.log(Data);
// case 3
const Gallery = (props) => {
  const { Data } = props;
  console.log(Data);
  const imgLists = Data.map((item) => (
    <li key={item.id}>
      <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} />
    </li>
  ));
  return <ul>{imgLists}</ul>;
};
export default Gallery;
