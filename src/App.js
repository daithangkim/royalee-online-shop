import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Main/>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
