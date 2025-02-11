import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PatternButton from "./components/PatternButton";
import "./styles/global.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
