import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Skillsets,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10 ">
          <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skillsets />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//bg-hero-pattern
