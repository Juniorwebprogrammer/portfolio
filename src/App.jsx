import Topbar from "./components/Topbar/topbar";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Testimonials from "./components/Testimonials/testimonials";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
