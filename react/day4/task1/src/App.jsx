import {Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Gallery from "./pages/Gallery";


const App = () => {
  return (
   <>
   
   <Navbar/>   


   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/course" element={<Course/>} />
    <Route path="/gallery" element={<Gallery/>} />
  </Routes>
   
   </>
  )
}

export default App