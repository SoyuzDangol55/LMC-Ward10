import Navbar from "../Navbar/NavBar.jsx"
import eye from "../../assets/eye.svg";
import circle from "../../assets/circle.svg";
import heart from "../../assets/heart.svg";
import Footer from "../Hero/Footer.jsx"
import "./File.css";
function File(){
return(
    <>
        <Navbar/>

        <section className="About-us">
        <div className="top-heading">
        <p>हाम्रो बारेमा</p>
        <h1>
            वडा नं. १० — एक परिचय
        </h1>
        <p>
            ललितपुर महानगरपालिका वडा नं. १० ज्वागल केन्द्रित ऐतिहासिक तथा सांस्कृतिक रूपमा सम्पन्न क्षेत्र हो।
        </p>
        </div>


      <div className="about-cards">

    <div className="about-card">
        <img src={eye} alt="eye" />
        <h4>हाम्रो दृष्टिकोण</h4>
        <p>समावेशी, समृद्ध, र वातावरणमैत्री वडाको निर्माण।</p>
    </div>

    <div className="about-card">
        <img src={circle} alt="circle" />
        <h4>हाम्रो उद्देश्य</h4>
        <p>गुणस्तरीय सेवा प्रवाह, पारदर्शी शासन र नागरिक सहभागिता।</p>
    </div>

    <div className="about-card">
        <img src={heart} alt="heart" />
        <h4>हाम्रो मूल्यमान्यता</h4>
        <p>इमान्दारिता, उत्तरदायित्व, समान व्यवहार।</p>
    </div>

    </div>

        <div className="last">
        <div>
        <h5>वडा परिचय</h5>
        <p>Lalitpur Metropolitan City - Ward No. 10 ललितपुर महानगरपालिकाको ऐतिहासिक वडाहरूमध्ये एक हो। यस वडामा ज्वागल, पुल्चोक, कुपण्डोलजस्ता क्षेत्र पर्दछन् र शिक्षा, स्वास्थ्य, व्यवसाय एवं सांस्कृतिक गतिविधिको केन्द्र हो।

            ललितपुर महानगरपालिका वडा नं १० कोपुण्डोल, ललितपुर र काठमाण्डौं जिल्ला लाई छुट्याउने बाग्मती नदी जोडिएको वडा हो । यस वडाको पूर्व तर्फ वडा नं ११, पश्चिम तर्फ वडा नं १, उत्तर तर्फ काठमाण्डौं जिल्ला र दक्षिण तर्फ वडा नं.३ संग जोडिएको छ । सबै जात जातिका मानिसहरुको बसोबास रहेको यस वडामा २०६८ सालको राष्ट्रिय जनगणना अनुसार १७२९ घरधुरी रहेको छ, जनसंख्या जम्मा ६५५४ जसमा महिला ३०४६ र पुरुष ३५०८ जना रहेको छन् । यस वडामा नेपालको सबै भन्दा ठूलो इन्जिनियरिङ अध्ययन संस्था रहेको छ, यसको अलावा पाटन संयुक्त क्याम्पस समेत यसै वडामा रहेको छ ।

            नेपालभरिको प्रसिद्ध पिठका रुपमा रहेको कान देवताको मन्दिर समेत यसै वडामा रहेको छ जुन नेपालभरिकै एक मात्र कान देवताको मन्दिर हो जहाँ कानका समस्या लिएर आउनेले पुजा गरेमा निको हुने जनमानसमा विश्वास रहेको छ । साथै यस वडामा अधिकांश बैंकिंग संस्थाको शाखा कार्यालय तथा नेपालकै धेरै बुटिकहरु भएको फेसन हबको रुपमा पनि रहेको छ । नमस्कार</p>

            <p>जनसंख्या
            ६,५५४</p>

            <p>
              घरधुरी
            १,७२९  
            </p>
        </div>

        <div className="map">
        <h5>सम्पर्क जानकारी</h5>
        <p>📍 Jwagal, Lalitpur, Nepal</p>
        <p>📞 ०१ - ५९०२५१६</p>
        <p>✉ ward10@lmc.gov.np</p>
        <p>🕐 सोमबार–शुक्रबार, बिहान ९ बजे - बेलुका ५ बजे</p>   
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7065.999603948744!2d85.321654!3d27.686401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb172274fb%3A0x9989c9c61b947578!2z4KSy4KSy4KS_4KSk4KSq4KWB4KSwIOCkruCkueCkvuCkqOCkl-CksOCkquCkvuCksuCkv-CkleCkviDgpLXgpKHgpL4g4KSo4KSCLiDgpafgpaY!5e0!3m2!1sne!2snp!4v1787225385520!5m2!1sne!2snp"
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="strict-origin-when-cross-origin"
        title="Ward No. 10 Location"
        ></iframe>

        </div>
        </div>
        </section>

        <Footer/>
    </>
);
}

export default File;