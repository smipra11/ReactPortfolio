
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import MyCarousel from './Components/carousel/mycarousel';
import TitleMessage from "./Components/title-message/title-message"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyCarousel/>
      <TitleMessage/>
    </div>
  );
}

export default App;
