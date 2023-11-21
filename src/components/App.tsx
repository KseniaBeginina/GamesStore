import { Routes, Route } from "react-router-dom";
import '../style/index.css';
import Header from './Header';
import Footer from './Footer';
import Home from "../pages/Home";

function App() {
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favs" element={<h1>Избранное</h1>} />
                <Route path="*" element={<h1>Страница не найдена</h1>} />
            </Routes>
            <Footer />
        </>
    );
  }
  
  export default App;