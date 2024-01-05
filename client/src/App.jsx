import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SIgnup";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MyBooks from "./pages/MyBooks";
import CheckoutPage from "./pages/CheckoutPage";
import { Myprovider } from "./components/Context";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Myprovider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/mybooks"
            element={
              <Layout>
                <MyBooks />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <CheckoutPage />
              </Layout>
            }
          />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Myprovider>
  );
}
