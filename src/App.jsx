
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Country from "./Pages/Country"
import Contact from "./Pages/Contact"
import Header from "./Components/Header"

const App = () => {
  return (
    <div className="bg-[#1E201E] h-[100%] w-screen">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App