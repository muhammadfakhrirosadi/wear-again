//import Navbar from './components/Navbar'
//import Footer from './components/Footer'
import Home from "./page/Home";
import Artikel from "./page/Artikel";
import Artikel_Full1 from "./page/Artikel_Full1";
import Donasi from "./page/Donasi";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Pesanan from "./page/Pesanan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navbar/>*/}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/artikel" element={<Artikel />} />
          <Route exact path="/artikel_full1" element={<Artikel_Full1 />} />
          <Route exact path="/donasi" element={<Donasi />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/pesanan" element={<Pesanan />} />
        </Routes>
        {/*<Footer />/*/}
      </Router>
    </div>
  );
}

export default App;
