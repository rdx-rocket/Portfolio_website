import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from "../../Portfolio_website/src/components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/testmonial" exact>
            <Testimonial />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
