import Hero from "./Component/Hero/Hero";
import Quickservice from "./Component/Hero/Quickservice";
import NavBar from "./Component/Navbar/NavBar";
import Quicknews from "./Component/Hero/Quicknews.jsx";
import Category from "./Component/Hero/Category.jsx";
import UpcommingEvent from "./Component/Hero/UpcommingEvent.jsx";
import Footer from "./Component/Hero/Footer.jsx";
function App() {

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
  )
}

export default App
