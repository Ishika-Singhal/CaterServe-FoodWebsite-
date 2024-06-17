import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import PageNotfound from "./pages/PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";
import Event from "./pages/Event";
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
