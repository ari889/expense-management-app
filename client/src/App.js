import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import { useJwt } from "react-jwt";
import { setAuth } from "./redux/auth/actions";
import ExpenseManagent from "./components/pages/ExpenseManagent";
import PrivateOutlet from "./components/PrivateOutlet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Profile from "./components/pages/Profile";

function App() {
  const token = localStorage.getItem("EMA_");
  const { decodedToken, isExpired } = useJwt(token);

  if (!isExpired) {
    store.dispatch(
      setAuth({
        user: decodedToken,
        token,
      })
    );
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="expense-management" element={<ExpenseManagent />} />
              <Route path="user/:id" element={<Profile />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
