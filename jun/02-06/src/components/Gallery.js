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
  return <div></div>;
};
export default Gallery;
