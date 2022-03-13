import Topbar from "./components/Topbar/topbar";
import ListMenu from "./components/Menu/menu";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Work from "./components/Works/works";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const[menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ListMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
