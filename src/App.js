import "./App.css";
import Home from "./pages/Home";
import PrivacyPOlicy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useContext, useEffect } from "react";
import axios from "axios";
import { GloabalCtx } from "./GlobalCtx";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

function App() {
  const [state, setState] = useContext(GloabalCtx);
  useEffect(() => {
    const browserToken = localStorage.getItem("user");
    if (!browserToken) {
      console.log("No token");
    } else {
      window.token = localStorage.getItem("user");
      (async function temp() {
        const res = await axios.get("/v1", {
          headers: { authorization: `Bearer ${window.token}` },
        });
        if (res.data.statusCode === 401) {
          localStorage.removeItem("user");
          console.log("Token expired");
        } else {
          // console.log(res.data);
          // console.log(res.data.data);
          setState(res.data);
        }
      })();
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPOlicy />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
