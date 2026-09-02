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
            <li><Link to="/" className='pill'>HomePage</Link></li>
            <li><Link to="/about">About-Us</Link></li>
            <li><Link to="/Employee">Staff</Link></li>
            <li><Link to="/Activedoctor">Physician</Link></li>
            <li><Link to="">Information</Link></li>
            <li><Link to="">News</Link></li>
            <li><Link to="">Program</Link></li>
            <li><Link to="">Location</Link></li>
            <li><Link to="">Business</Link></li>
            <li><Link to="">Article</Link></li>
            <li><Link to="">Gallery</Link></li>
            <li><Link to="">Publication</Link></li>
            <li><Link to="">Holiday</Link></li>
            <li><Link to="">Lab-Report</Link></li>
            <li><Link to="">Complaint</Link></li>
            <li><Link to="">Event-Registration</Link></li>
        </ul>

        <a href="" className='mobile-glow'>Online Application</a>
    </div>
    </>);
}

export default NavBar;