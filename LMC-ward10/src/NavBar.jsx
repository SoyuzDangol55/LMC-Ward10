import { useState, useRef } from 'react'
import logo from './assets/ward10-logo.png'
import './NavBar.css'

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    // Main nav sliding highlight
    const mainNavRef = useRef(null);
    const [mainHighlight, setMainHighlight] = useState({ opacity: 0 });
    const [mainActiveIndex, setMainActiveIndex] = useState(null);

    // Secondary nav sliding highlight
    const secondaryNavRef = useRef(null);
    const [secondaryHighlight, setSecondaryHighlight] = useState({ opacity: 0 });
    const [secondaryActiveIndex, setSecondaryActiveIndex] = useState(null);

    const handleHover = (e, ulRef, setHighlight, setIndex, index) => {
        const li = e.currentTarget;
        const ul = ulRef.current;
        const liRect = li.getBoundingClientRect();
        const ulRect = ul.getBoundingClientRect();

        setHighlight({
            left: liRect.left - ulRect.left,
            top: liRect.top - ulRect.top,
            width: liRect.width,
            height: liRect.height,
            opacity: 1
        });
        setIndex(index);
    };

    const mainLinks = ["HomePage", "About-Us", "Staff", "Physician", "Information", "News", "Program", "Location"];
    const secondaryLinks = ["Business", "Article", "Gallery", "Publication", "Holiday", "Lab-Report", "Complaint", "Event-Registration"];

    return(<>
    <nav className="Nav-Bar">

    <div className='top'>
    <p className="Heading">📞 01 - ⁇ 02 ⁇ 1 · ✉ ward10@lmc.gov.np </p>
    <p className='top-secondary'>Lalitpur Metropolitan · Vada no. 10</p>
    </div>

    <div className='maindiv'>
    <div className='manage-logo'>
    <img src={logo} alt="Ward-10Logo" className='logo'/>
    <p><b>Lalitpur metropolis</b> <br />
    10 no. Wada office <br />
    Jamegal, kupondole, Lalitpur Bagmati Pradesh, Nepal</p>
    </div>

    <button className='hamburger' onClick={() => setMenuOpen(true)} aria-label="Open navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>

     <ul ref={mainNavRef} className='nav-highlight-wrapper'>
        <div className='nav-highlight' style={mainHighlight}></div>
        {mainLinks.map((link, index) => (
            <li key={link}>
                
                    href=""
                    className={mainActiveIndex === index ? 'active' : ''}
                    onMouseEnter={(e) => handleHover(e, mainNavRef, setMainHighlight, setMainActiveIndex, index)}
                >
                    {link}
                </a>
            </li>
        ))}
     </ul>
     </div>
     <hr />
    </nav>

    <nav className='secondaryNav'>
    <ul ref={secondaryNavRef} className='nav-highlight-wrapper'>
        <div className='nav-highlight secondary' style={secondaryHighlight}></div>
        {secondaryLinks.map((link, index) => (
            <li key={link}>
                
                    href=""
                    className={secondaryActiveIndex === index ? 'active' : ''}
                    onMouseEnter={(e) => handleHover(e, secondaryNavRef, setSecondaryHighlight, setSecondaryActiveIndex, index)}
                >
                    {link}
                </a>
            </li>
        ))}
        <li><a href="" className='glow'>Online Application</a></li>
     </ul>
    </nav>
    <hr />

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