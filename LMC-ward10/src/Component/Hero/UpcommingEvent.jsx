import { useState, useEffect } from "react";
import { getUpcommingEvent } from "../../Services/api";
import "./UpcommingEvent.css";

function UpcommingEvent() {
    const [Events, setCommingEvent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadEvents() {
            try {
                const data = await getUpcommingEvent();
                setCommingEvent(data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadEvents();
    }, []);

    return (
        <section className="quick-upcommingevent">
            <div className="main-div">

                {/* Header */}
                <div className="top-section">    
                        <h2>आगामी कार्यक्रमहरू</h2>
                    <a href="#">
                        सबै →
                    </a>
                </div>

                {/* Cards */}
                <div className="upcomming-cards">

                    {loading ? (
                        <p className="loading-text">लोड हुँदैछ...</p>
                    ) : (
                        Events.slice(0, 3).map((event, index) => (
                            <div
                                className="event-card"
                                key={event.id || index}
                            >

                                <p className="event-date">
                                    {event.startDate}
                                </p>

                                <h3>
                                    {event.title}
                                </h3>

                                <p className="event-description">
                                    {event.description}
                                </p>

                                <p className="event-location">
                                    <span>⌖</span>
                                    {event.location}
                                </p>

                            </div>
                        ))
                    )}

                </div>

            </div>
        </section>
    );
}

export default UpcommingEvent;