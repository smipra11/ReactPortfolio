
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import MyCarousel from './Components/carousel/mycarousel';
import TitleMessage from "./Components/title-message/title-message"
import About from "./Pages/about/about"
import Skills from "./Pages/skills/skills"
import Container from "react-bootstrap/Container";
import Experience from "./Pages/Experience/experience"
import "./App.css"


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar/>
      <MyCarousel/>
      <TitleMessage/>
      <About/>
      <Container className="container-box rounded">
      <Skills/>
      </Container>
    
      <Container className="container-box rounded">
      <Experience/>
      </Container>
    </div>
  );
}

export default App;
