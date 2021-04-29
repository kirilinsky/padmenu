import Gallery from "./Pages/Gallery";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="wrap">
        <Header />
        <MobileMenu />

        <Gallery />
      </div>
    </Router>
  );
}

export default App;
