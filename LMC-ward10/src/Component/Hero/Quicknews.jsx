import { useState, useEffect } from "react";
import { getNotice, getNews } from "../../Services/api";
import "./Quicknews.css";

//ताजा सूचना
function Quicknews() {

    const [notices, setNotices] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadNotice() {
            try {
                const data = await getNotice();
                setNotices(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadNotice();

    }, []);


    // समाचार
    useEffect(() => {

        async function loadNews() {
            try {
                const data = await getNews();
                setNews(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        loadNews();

    }, []);


    if (loading) {
        return <h2>Loading...</h2>;
    }


return (
    <section className="quick-news">

        <div className="newnews-container">

            <div className="top-section">
                <h2>ताजा सूचना</h2>
                <a href="">सबै →</a>
            </div>

            {notices.slice(0,4).map((notice) => (

                <div className="newnews-card" key={notice.id}>

                    <h3>{notice.title}</h3>

                    <p>{notice.publicationDate}</p>

                </div>

            ))}

        </div>



        <div className="news-container">

            <div className="top-section">
                <h2>समाचार</h2>
                <a href="">सबै →</a>
            </div>


            {news.slice(0,4).map((item) => (

                <div className="news-card" key={item.id}>

                    <h3>{item.title}</h3>

                    <p>{item.publicationDate}</p>

                </div>

            ))}

        </div>


    </section>
);
}

export default Quicknews;