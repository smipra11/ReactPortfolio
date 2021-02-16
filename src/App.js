
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import MyCarousel from './Components/carousel/mycarousel';
import TitleMessage from "./Components/title-message/title-message"
import About from "./Pages/about/about"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyCarousel/>
      <TitleMessage/>
      <About/>
    </div>
  );
}

export default App;
