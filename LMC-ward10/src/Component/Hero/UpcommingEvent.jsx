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

                {/* =========================
                    HEADING
                ========================== */}
                <div className="top-section">
                    <h2>आगामी कार्यक्रमहरू</h2>

                    <a href="#">
                        सबै →
                    </a>
                </div>


                {/* =========================
                    EVENT CARDS
                ========================== */}
                <div className="upcomming-cards">

                    {loading ? (
                        <p className="event-message">
                            लोड हुँदैछ...
                        </p>
                    ) : Events.length === 0 ? (
                        <p className="event-message">
                            हाल कुनै आगामी कार्यक्रम छैन
                        </p>
                    ) : (
                        Events.map((event, index) => (
                            <a
                                href={`/events/${event.id || index}`}
                                className="event-card"
                                key={event.id || index}
                            >

                                {/* Date */}
                                <p className="event-date">
                                    {event.startDate}
                                </p>


                                {/* Title */}
                                <h3>
                                    {event.title}
                                </h3>


                                {/* Description */}
                                <p className="event-description">
                                    {event.description}
                                </p>


                                {/* Location */}
                                <p className="event-location">
                                    📍 {event.location}
                                </p>

                            </a>
                        ))
                    )}

                </div>

            </div>
        </section>
    );
}

export default UpcommingEvent;