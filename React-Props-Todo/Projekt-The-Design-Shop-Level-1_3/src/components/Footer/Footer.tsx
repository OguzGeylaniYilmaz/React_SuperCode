import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <b>
            <p>Info</p>
          </b>
          <p>Carefullt curated online design store</p>
        </div>
        <div>
          {" "}
          <b>
            <p>Get In Touch</p>
          </b>
          <p>example@gmail.com</p>
          <p>Los Angeles, CA</p>
        </div>
        <div>
          {" "}
          <b>
            <p>Newsletter</p>
          </b>
          <p>Sign up for the latest arrivals, special offers and weekly picks</p>
        </div>
        <div>
          {" "}
          <b>
            <p>Follow Us</p>
          </b>
          <p>Facebook</p><p>Twitter</p><p>Snapchat</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
