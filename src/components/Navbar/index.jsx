import { Button, Space } from "antd";

const NavBar = () => {
  return (
    <>
      <Space>
        <Button
          style={{
            border: "none",
            borderBottom: "1px solid red",
            borderRadius: "0", // Remove o border-radius
            backgroundColor: "transparent",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#FA9FAE"}
          onMouseLeave={(e) => e.target.style.color = "black"} // Cor de fundo ao sair do hover
        >
          Nossa História
        </Button>
        <Button
          style={{
            border: "none",
            borderBottom: "1px solid red",
            borderRadius: "0",
            backgroundColor: "transparent",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#FA9FAE"}
          onMouseLeave={(e) => e.target.style.color = "black"}
        >
          Produtos
        </Button>
        <Button
          style={{
            border: "none",
            borderBottom: "1px solid red",
            borderRadius: "0",
            backgroundColor: "transparent",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#FA9FAE"}
          onMouseLeave={(e) => e.target.style.color = "black"}
        >
          Contato
        </Button>
      </Space>
    </>
  );
};

export default NavBar;
