import { Button, Space } from "antd";
import "./style.css"

const NavBar = () => {
  return (
    <>
      <Space>
        <button className="buttonNavbar">Home</button>
        <button className="buttonNavbar">Sobre nossa Loja</button>
        <button className="buttonNavbar">Produtos</button>
      </Space>
    </>
  );
};

export default NavBar;
