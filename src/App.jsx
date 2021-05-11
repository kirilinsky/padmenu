import Gallery from "./Pages/Gallery";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import { useAtom } from "jotai";
import { loginAtom, mobileMenuAtom, tokenAtom } from "./Atoms";
import { useEffect } from "react";
import moment from "moment";
import axios from "axios";

function App() {
  const [config] = useAtom(loginAtom);
  const [menu, setMenu] = useAtom(mobileMenuAtom);
  const [auth, setAuth] = useAtom(tokenAtom);

  const openMenu = () => {
    setMenu("mobile will-opened");
    setTimeout(() => {
      setMenu("mobile");
    }, 500);
  };
  const tryToLogin = () => {
    axios
      .get("/auth/access_token2", {
        baseURL: config.url,
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          user_id: config.user,
          user_secret: config.password,
        },
      })
      .then((x) => {
        console.log("token successfully recieved");
        setAuth({ token: x.data, given: new Date() });
      })
      .catch((e) => {
        console.warn("ошибка при получении токена", e);
        openMenu();
      });
  };
  useEffect(() => {
    if (!auth.token) {
      console.log("need get token");
      tryToLogin();
    }

    if (moment().diff(auth.given, "minutes") > 19) {
      console.log("token overdue, try to get new");
      tryToLogin();
    }
  }, [auth]);

  useEffect(() => {
    if (!auth.token) {
      return;
    }
  }, []);
  return (
    <Router>
      <div className="wrap">
        <Header />
        <Switch>
          <Route exact path="/menu/:id?">
            <Gallery />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Redirect to="/menu" />
        </Switch>
        <MobileMenu />
      </div>
    </Router>
  );
}

export default App;
