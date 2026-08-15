import "./Footer.css";
import logo from "../../assets/ward10-logo.png";

function Footer() {
    return (
        <footer className="main-section">

            {/* ================= TOP CTA SECTION ================= */}
            <div className="top-div">

                <div className="words">
                    <h2>तपाईंको आवाज महत्वपूर्ण छ</h2>

                    <p>
                        वडा सम्बन्धी कुनै पनि सुझाव वा गुनासो हामीलाई पठाउनुहोस्।
                        हामी २४ घण्टाभित्र जवाफ दिनेछौं।
                    </p>
                </div>

                <div className="btns">
                    <a href="#" className="btn1">
                        गुनासो दर्ता
                    </a>

                    <a href="#" className="btn2">
                        ग्यालरी
                    </a>
                </div>

            </div>


            {/* ================= FOOTER ================= */}
            <div className="footer">

                <div className="footer-container">

                    {/* Logo & About */}
                    <div className="footer-about">

                        <img
                            src={logo}
                            alt="Lalitpur Ward 10 Logo"
                        />

                        <div>
                            <h3>ललितपुर</h3>

                            <h4>
                                महानगरपालिका १० नं.<br />
                                वडा कार्यालय
                            </h4>

                            <p>
                                ज्वागल, कोपुण्डोल, ललितपुर,<br />
                                बागमती प्रदेश, नेपाल - सेवा,<br />
                                पारदर्शिता र समृद्धिको लागि।
                            </p>
                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>द्रुत लिङ्क</h3>

                        <ul>
                            <li>
                                <a href="#">हाम्रो बारेमा</a>
                            </li>

                            <li>
                                <a href="#">कर्मचारी</a>
                            </li>

                            <li>
                                <a href="#">सूचना</a>
                            </li>

                            <li>
                                <a href="#">गुनासो दर्ता</a>
                            </li>
                        </ul>

                    </div>


                    {/* Services */}
                    <div className="footer-column">

                        <h3>सेवाहरू</h3>

                        <ul>
                            <li>
                                <a href="#">स्वास्थ्य</a>
                            </li>

                            <li>
                                <a href="#">व्यवसाय दर्ता</a>
                            </li>

                            <li>
                                <a href="#">पर्यटन स्थलहरू</a>
                            </li>

                            <li>
                                <a href="#">सार्वजनिक बिदा</a>
                            </li>
                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="footer-column contact">

                        <h3>सम्पर्क</h3>

                        <p>
                            <span>⌖</span>
                            ज्वागल, ललितपुर, नेपाल
                        </p>

                        <p>
                            <span>☎</span>
                            ०१ - ५९०२५१६
                        </p>

                        <p>
                            <span>✉</span>

                            <a href="mailto:ward10@lmc.gov.np">
                                ward10@lmc.gov.np
                            </a>
                        </p>

                    </div>

                </div>


                {/* ================= COPYRIGHT ================= */}

                <div className="footer-bottom">
                    <p>
                        © 2026 Lalitpur Metropolitan City — Ward 10.
                        All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;