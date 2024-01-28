import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import SignUp from "./pages/SignUp";
import Videos from "./pages/Videos";
import Coursepage from "./pages/Coursepage";
import Payment from "./pages/Payment";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/Coursepage" element={<Coursepage />} />
          <Route path="/VideosPage" element={<Videos />} />
          <Route path="/PaymentPage" element={<Payment />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
