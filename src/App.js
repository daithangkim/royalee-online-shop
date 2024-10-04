import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from "./features/ProductList/components/ProductDetail";

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Router>
                <Header/>
                <div style={{flex: 1}}>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/product/:id" element={<ProductDetails/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
