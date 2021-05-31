const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyrights <sup>®</sup> {year}{" "}
      </p>
    </div>
  );
};

export default Footer;
