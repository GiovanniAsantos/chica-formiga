import PropTypes from "prop-types";
import "./style.css";

const HeaderNavbar = ({ heroRef, aboutUsRef, productsRef, clientsRef }) => {
    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <>
      <div className="navbar">
        <button className="buttonNavbar" onClick={() => handleScroll(heroRef)}>
          Home
        </button>
        <button
          className="buttonNavbar"
          onClick={() => handleScroll(aboutUsRef)}
        >
          Sobre
        </button>
        <button
          className="buttonNavbar"
          onClick={() => handleScroll(clientsRef)}
        >
          Clientes
        </button>
        <button
          className="buttonNavbar"
          onClick={() => handleScroll(productsRef)}
        >
          Produtos
        </button>
      </div>
    </>
  );
};
HeaderNavbar.propTypes = {
  heroRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  productsRef: PropTypes.object.isRequired,
  clientsRef: PropTypes.object.isRequired,
};

export default HeaderNavbar;
