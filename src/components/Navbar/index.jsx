import { Space } from "antd";
import PropTypes from "prop-types";
import "./style.css";

const NavBar = ({ heroRef, aboutUsRef, productsRef, clientsRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Space>
        <button className="buttonNavbar" onClick={() => handleScroll(heroRef)}>Home</button>
        <button className="buttonNavbar" onClick={() => handleScroll(aboutUsRef)}>Sobre nossa Loja</button>
        <button className="buttonNavbar" onClick={() => handleScroll(clientsRef)}>Clientes</button>
        <button className="buttonNavbar" onClick={() => handleScroll(productsRef)}>Produtos</button>
      </Space>
    </>
  );
};

// Validação das props
NavBar.propTypes = {
  heroRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  productsRef: PropTypes.object.isRequired,
  clientsRef: PropTypes.object.isRequired,
};

export default NavBar;
