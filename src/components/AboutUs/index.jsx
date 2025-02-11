import PatternButton from "../PatternButton";
import "./style.css";

const AboutUs = () => {
  return (
    <>
      <div className="containerAbout">
        <h1 className="titleAbout">Sobre Nós</h1>
        <p className="textAbout">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          consequatur maxime ratione. Ab magni consequatur ipsum, mollitia
          provident perferendis impedit laudantium sit atque voluptas eius
          deleniti quod distinctio labore excepturi sequi minus corrupti,
          aspernatur quis temporibus facilis illum modi accusamus. Para nos
          procurar, basta clicar no botão abaixo
        </p>
        <PatternButton>Clique Aqui</PatternButton>
      </div>
    </>
  );
};
export default AboutUs;
