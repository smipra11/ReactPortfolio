import "./App.css";

import About from "./Pages/about/about";
import Container from "react-bootstrap/Container";
import Project from "./Pages/Project/project";

import "./App.css";
import MyCarousel from "./Components/carousel/mycarousel";

function App() {
  return (
    <div className="App" style={{ position: "relative" ,backgroundColor:'#efefee'}}>
     
      <MyCarousel/>
    
      <Container className="container-box rounded">
        <About/>
        </Container>
        <Container className="container-box rounded">
        <Project/>
        </Container>
      

     
     
    </div>
  );
}

export default App;
