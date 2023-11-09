import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Cars from "./pages/Cars";
import Navigation from "./components/LandingPage/Navbar";
import Footer from "./components/LandingPage/Footer";
import CarContextProvider from "./store/car-filter-context";
import "./App.css";

function App() {
  return (
    <>
      <CarContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
          <Footer />
        </Router>
      </CarContextProvider>
    </>
  );
}

export default App;
