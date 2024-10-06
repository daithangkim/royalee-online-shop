import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from "./features/ProductList/components/ProductDetail";
import CategoryPage from "./features/AllCategory/CategoryPage";
import ProfilePage from "./features/Profile/components/ProfilePage";

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Router>
                <Header/>
                <div style={{flex: 1}}>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/product/:id" element={<ProductDetails/>}/>
                        <Route path="/under-construction" element={<CategoryPage />} />
                        <Route path="/user" element={<ProfilePage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
