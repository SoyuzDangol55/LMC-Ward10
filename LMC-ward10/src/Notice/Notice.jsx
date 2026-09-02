import { getNotice } from "../Services/api";
import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/NavBar";
import "./Notice.css";

const IMAGE_BASE_URL = "https://ward10admin.lmc.gov.np/api/uploads/";

function Notice() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNotices() {
            try {
                const data = await getNotice();
                setNotices(data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchNotices();
    }, []);

    let content;

    if (loading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <div className="cards">
                {notices.map((notice) => (
                    <div className="notice-card" key={notice.id}>
                        
                        {notice.galleryPhotos?.[0]?.fileName && (
                            <img
                                src={`${IMAGE_BASE_URL}${notice.galleryPhotos[0].fileName}`}
                                alt={notice.title}
                            />
                        )}

                        <h2>{notice.title}</h2>
                        <p>{notice.content}</p>
                        
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="Header">
            <p>सूचना तथा जानकारी</p>
            <h1>ताजा सूचनाहरू</h1>
            <p><b>वडा कार्यालयबाट जारी भएका नवीनतम सूचना तथा परिपत्रहरू।</b></p>
            </div>
            {content}
        </>
    );
}

export default Notice;