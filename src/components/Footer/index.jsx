import "./style.css"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <p style={{ textAlign: "center" }}>Endereço: Rua Caio Cid 477</p>
        <p style={{ textAlign: "center" }}>Telefone:85 99999-9999</p>
        <p style={{ textAlign: "center" }}>�� 2025 Chica Formiga. Todos os direitos reservados.</p>
        <p style={{ textAlign: "center" }}>Desenvolvido por Giovanni Azevedo</p>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/GiovanniAsantos/chica-formiga.git">
            Acesse o repositório no GitHub
          </a>
        </p>
      </div>
    </>
  );
};
export default Footer;
