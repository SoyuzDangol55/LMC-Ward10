import { useState } from 'react'
import logo from "../../assets/ward10-logo.png";
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(<>
    <nav className="Nav-Bar">

    <div className='top'>
    <p className="Heading">📞 ०१ - ५९०२५१६ · ✉ ward10@lmc.gov.np</p>
    <p>ललितपुर महानगरपालिका · वडा नं. १०</p>
    </div>

    <div className='maindiv'>
    <div className='manage-logo'>
    <img src={logo} alt="Ward-10Logo" className='logo'/>
    <p><b>ललितपुर महानगरपालिका</b> <br />
   १० नं. वडा कार्यालय <br />
    ज्वागल, कोपुण्डोल, ललितपुर बागमती प्रदेश, नेपाल</p>
    </div>

    <button className='hamburger' onClick={() => setMenuOpen(true)} aria-label="Open navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>

<ul>
    <li><Link to="/">गृहपृष्ठ</Link></li>
    <li><Link to="/about">हाम्रो बारेमा</Link></li>
    <li><Link to="/Employee">कर्मचारी</Link></li>
    <li><Link to="/Activedoctor">चिकित्सक</Link></li>
    <li><Link to="/notice">सूचना</Link></li>
    <li><Link to="/news">समाचार</Link></li>
    <li><Link to="/events">कार्यक्रम</Link></li>
    <li><Link to="/location">स्थानहरू</Link></li>
</ul>
     </div>
     <hr />
    </nav>

    <nav className='secondaryNav'>
    <ul>
     <li><a href="">व्यवसाय</a></li>
     <li><a href="">लेख</a></li>
     <li><a href="">ग्यालरी</a></li>
     <li><a href="">प्रकाशन</a></li>
     <li><a href="">बिदा</a></li>
     <li><a href="">ल्याब रिपोर्ट</a></li>
     <li><a href="">गुनासो</a></li>
     <li><a href="">घटना दर्ता</a></li>
     <li><a href="" className='glow'>अनलाइन आवेदन</a></li>
     </ul>
    </nav>

    {/* Mobile / Tablet full menu overlay */}
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-header'>
            <img src={logo} alt="Ward-10Logo" className='logo'/>
            <div className='mobile-menu-text'>
                <p><b>Lalitpur metropolis</b></p>
                <p>10 no. Wada office</p>
                <p>Jamegal, kupondole, Lalitpur Bagmati Pradesh, Nepal</p>
            </div>
            <button className='close-btn' onClick={() => setMenuOpen(false)} aria-label="Close navigation">✕</button>
        </div>

        <ul className='mobile-nav-grid'>
            <li><a href="" className='pill'>HomePage</a></li>
            <li><a href="">About-Us</a></li>
            <li><a href="">Staff</a></li>
            <li><a href="">Physician</a></li>
            <li><a href="">Information</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Program</a></li>
            <li><a href="">Location</a></li>
            <li><a href="">Business</a></li>
            <li><a href="">Article</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Publication</a></li>
            <li><a href="">Holiday</a></li>
            <li><a href="">Lab-Report</a></li>
            <li><a href="">Complaint</a></li>
            <li><a href="">Event-Registration</a></li>
        </ul>

        <a href="" className='mobile-glow'>Online Application</a>
    </div>
    </>);
}

export default NavBar;