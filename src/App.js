import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Search from "./components/Search/Search";
import Selects from "./components/Selects/Selects";
import Carousell from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousell />
      <Footer />
    </div>
  );
}

export default App;
