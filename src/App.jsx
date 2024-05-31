//import Navbar from './components/Navbar'
//import Footer from './components/Footer'
import Home from "./page/Home";
import Artikel from "./page/Artikel";
import Artikel_Full1 from "./page/Artikel_Full1";
import Donasi from "./page/Donasi";
import Etalase from './page/Etalase'
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form_Berdonasi from "./page/Form_Berdonasi";
import Profilkoin from "./page/Profilkoin";
import Edit_Profile from "./page/Edit_Profile";
import Beranda from "./page/Beranda";

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
          <Route  exact path='/etalase' element={<Etalase/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/form_donasi" element={<Form_Berdonasi />} />
          <Route exact path="/profil-koin" element={<Profilkoin />} />
          <Route exact path="/edit_profile" element={<Edit_Profile />} />
          <Route exact path="/beranda" element={<Beranda />} />
        </Routes>
        {/*<Footer />/*/}
      </Router>
    </div>
  );
}

export default App;
