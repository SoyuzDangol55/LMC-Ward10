import logo from './assets/ward10-logo.png'
import './NavBar.css'
function NavBar(){
    return(<>
    <nav className="Nav-Bar">

    <div className='top'>
    <p className="Heading">📞 01 - ⁇ 02 ⁇ 1 · ✉ ward10@lmc.gov.np </p>
    <p>Lalitpur Metropolitan · Vada no. 10</p>
    </div>

    <div className='maindiv'>
    <div className='manage-logo'>
    <img src={logo} alt="Ward-10Logo" className='logo'/>
    <p><b>Lalitpur metropolis</b> <br />
    10 no. Wada office <br />
    Jamegal, kupondole, Lalitpur Bagmati Pradesh, Nepal</p>
    </div>
     <ul>
        <li><a href="">HomePage</a></li>
        <li><a href="">About-Us</a></li>
        <li><a href="">Staff</a></li>
        <li><a href="">Physician</a></li>
        <li><a href="">Information</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Program</a></li>
        <li><a href="">Location</a></li>
     </ul>
     </div>
     <hr />
    </nav>

    <nav className='secondaryNav'>
    <ul>
     <li><a href="">Business</a></li>
     <li><a href="">Article</a></li>
     <li><a href="">Gallery</a></li>
     <li><a href="">Publication</a></li>
     <li><a href="">Holiday</a></li>
     <li><a href="">Lab-Report</a></li>
     <li><a href="">Complaint</a></li>
     <li><a href="">Event-Registration</a></li>
     <li><a href="">Online Application</a></li>
     </ul>
    </nav>
    <hr />
    </>);
}

export default NavBar;