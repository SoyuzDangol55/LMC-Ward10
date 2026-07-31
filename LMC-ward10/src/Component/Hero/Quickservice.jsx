import './Quickservice.css'
import FaUsers from "../../assets/FaUsers.png";
import FaHospital from "../../assets/FaHospital.png";
import FaNewspaper from "../../assets/FaNewspaper.png";
import FaStore from "../../assets/FaStore.png";
import FaMapMarkerAlt from "../../assets/FaMapMarkerAlt.png";
import FaCommentDots from "../../assets/FaCommentDots.png";
import './Quickservice.css'
function Quickservice() {

    const servies = [
        {
            title: "जनप्रतिनिधि / कर्मचारी",
            description: "वडा अध्यक्ष, सदस्य र कर्मचारीहरू",
            icon: FaUsers,
            link: "/staff"
        }, {
            title: "स्वास्थ्य सेवा",
            description: "चिकित्सक र स्वास्थ्य चौकी",
            icon: FaHospital,
            link: "/health"
        },
        {
            title: "सूचना तथा बैठक",
            description: "नवीनतम वडा सूचनाहरू",
            icon: FaNewspaper,
            link: "/notice"
        },
        {
            title: "व्यवसाय निर्देशिका",
            description: "स्थानीय व्यवसाय खोज्नुहोस्",
            icon: FaStore,
            link: "/business"
        },
        {
            title: "पर्यटकीय स्थल",
            description: "मन्दिर, पार्क र सम्पदा",
            icon: FaMapMarkerAlt,
            link: "/places"
        },
        {
            title: "गुनासो दर्ता",
            description: "सुझाव वा गुनासो पठाउनुहोस्",
            icon: FaCommentDots,
            link: "/complaint"
        }
    ];
    return (
        <>
            <section className='quick-services'>

                <div>
                    <p>सेवाहरू</p>
                    <h2>द्रुत सेवाहरू</h2>
                </div>

                <div className="service-container">
                    {
                        servies.map((service, index) => (
                            <div className='service-card' key={index}>

                                <div className='icon'>
                                    <img src={service.icon} alt={service.title} />
                                </div>

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Quickservice;