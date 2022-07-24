import "./index.css";
import Header from "../src/Components/Header/Header";
import Potions from "../src/Components/Potions/Potions";
import Contact from "../src/Components/Contact/Contact";
import AboutUs from "../src/Components/About/About";
import Specials from "../src/Components/Specials/Specials";

function App() {
  return (
    <>
      <Header />
      <Potions />
      <Specials />
      <Contact />
      <AboutUs />
    </>
  );
}

export default App;
