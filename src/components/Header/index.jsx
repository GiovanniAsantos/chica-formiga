import chicaLogoRemovebg from "../../../src/assets/chicaLogo-removebg.png";
import ContactButtons from "../ContactButtons";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative", // Permite o posicionamento absoluto dentro da div
          padding: "0",
          margin: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center", // Centraliza os elementos dentro da coluna
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <img
              style={{ height: "9rem", width: "9rem" }}
              src={chicaLogoRemovebg}
              alt="Logo"
            />
          </div>
          <NavBar />
        </div>

        {/* Posiciona o ContactButtons no canto direito, mas no centro verticalmente */}
        <div
          style={{
            position: "absolute", // Torna possível a posição absoluta dentro do container
            right: "10px", // Distância da borda direita
            top: "50%", // Centraliza verticalmente
            transform: "translateY(-50%)", // Ajusta a centralização vertical
          }}
        >
          <ContactButtons />
        </div>
      </div>
    </>
  );
};

export default Header;
