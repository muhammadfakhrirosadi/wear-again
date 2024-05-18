//import Navbar from './components/Navbar'
//import Footer from './components/Footer'
import Home from "./page/Home";
import Artikel from "./page/Artikel";
import Artikel_Full1 from "./page/Artikel_Full1";
import Donasi from "./page/Donasi";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navbar/>*/}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/artikel" element={<Artikel />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        {/*<Footer />/*/}
      </Router>
    </div>
  );
}

export default App;
