import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
