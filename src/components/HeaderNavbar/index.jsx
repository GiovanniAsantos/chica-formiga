import { useRef } from "react";

const HeaderNavbar = ({ heroRef, aboutUsRef, productsRef, clientsRef }) => {
  const buttonsRef = useRef([]);

  const handleScroll = (ref, index) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    
    // Remove o foco do botão após clicar
    if (buttonsRef.current[index]) {
      buttonsRef.current[index].blur();
    }
  };

  return (
    <div className="navbar">
      {[
        { label: "Home", ref: heroRef },
        { label: "Sobre", ref: aboutUsRef },
        { label: "Clientes", ref: clientsRef },
        { label: "Produtos", ref: productsRef },
      ].map((item, index) => (
        <button
          key={index}
          className="buttonNavbar"
          ref={(el) => (buttonsRef.current[index] = el)}
          onClick={() => handleScroll(item.ref, index)}
        >
          <span className="buttonLabel">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default HeaderNavbar;
