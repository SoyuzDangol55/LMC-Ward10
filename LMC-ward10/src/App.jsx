import { Routes, Route } from "react-router-dom";
import Hero from "./Component/Hero/Hero";
import Quickservice from "./Component/Hero/Quickservice";
import NavBar from "./Component/Navbar/NavBar";
import Quicknews from "./Component/Hero/Quicknews.jsx";
import Category from "./Component/Hero/Category.jsx";
import UpcommingEvent from "./Component/Hero/UpcommingEvent.jsx";
import Footer from "./Component/Hero/Footer.jsx";
import File from "./Component/Aboutus/File.jsx";
import Employee from "./Employees/Employee";
import Activedoctor from "./Employees/Activedoctor";

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Quickservice/>
      <Quicknews/>
      <Category/>
      <UpcommingEvent/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<File />} />
      <Route path="/Employee" element={<Employee />} />
      <Route path="/Activedoctor" element={<Activedoctor />} />
      
    </Routes>
    

  );
}

export default App;
