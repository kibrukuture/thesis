import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, Fragment, createContext } from "react";

import SignUp from "../src/page/SignUp";
import SignIn from "../src/page/SignIn";
import PlaceOrder from "./page/PlaceOrder";
import LandingPage from "../src/page/LandingPage";
import Loader from "../src/page/Loader";

import Address from "../src/page/Address";
import Payment from "../src/page/Payment";
import OrderSuccess from "../src/page/OrderSuccess";
import View from "../src/page/View";
import ContentManager from "../src/page/ContentManager";

import Orders from "./page/Orders";

export const Context = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});
  const [card, setCard] = useState("");

  const [loggedUsers, setLoggedUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [orderedProcuts, setOrderedProducts] = useState([]);

  const [files, setFiles] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const handleOrderdProducts = (value) => {
    setOrderedProducts((prev) => {
      return [value, ...prev];
    });
  };

  const handleFiles = (value) => {
    setFiles((prev) => {
      return [value, ...prev];
    });
  };
  const handleLogged = (value) => {
    setLoggedUsers((prev) => {
      return [
        {
          first: value.first,
          last: value.last,
          email: value.email,
          passcode: value.passcode,
        },
        ...prev,
      ];
    });
  };
  const handleUsername = (value) => {
    setUserName(value);
    console.log(value);
  };
  const handleUser = (value) => {
    setUser({ first: value.first, last: value.last });
  };
  const handleBasket = (id) => {
    setBasket((prev) => [id, ...prev]);
  };
  const handleCard = (card) => {
    setCard(card);
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-black min-h-screen   text-white font-nunito relative overflow-x-hidden">
          <Context.Provider
            value={{
              handleUsername: handleUsername,
              first: userName,
              handleBasket: handleBasket,
              basket: basket,
              card: card,
              handleCard: handleCard,
              user: user,
              handleUser: handleUser,
              handleLogged: handleLogged,
              loggedUsers: loggedUsers,
              files: files,
              handleFiles: handleFiles,
              handleOrderdProducts: handleOrderdProducts,
              orderedProcuts: orderedProcuts,
            }}
          >
            <Router>
              <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/account" element={<SignUp />}></Route>
                <Route exact path="/login" element={<SignIn />}></Route>
                <Route exact path="/basket" element={<PlaceOrder />}></Route>
                <Route exact path="/address" element={<Address />}></Route>
                <Route exact path="/payment" element={<Payment />}></Route>
                <Route exact path="/success" element={<OrderSuccess />}></Route>
                <Route exact path="/track" element={<Orders />}></Route>
                <Route exact path="/view" element={<View />}></Route>
                <Route exact path="/cms" element={<ContentManager />}></Route>
              </Routes>
            </Router>
          </Context.Provider>
        </div>
      )}
    </Fragment>
  );
}

export default App;
