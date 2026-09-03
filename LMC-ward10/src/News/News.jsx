import Navbar from "../Component/Navbar/NavBar";
import { getNews } from "../Services/api";
import { useState, useEffect } from "react";
import "./News.css";

const IMAGE_BASE_URL = "https://ward10admin.lmc.gov.np/api/uploads/";

function News() {
  const [freshnews, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getNews();
        setNews(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchdata();
  }, []);

  let content;

  if (loading) {
    content = (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  } else if (freshnews.length === 0) {
    content = <p className="empty-state">कुनै समाचार फेला परेन।</p>;
  } else {
    content = (
      <div className="cards">
        {freshnews.map((news) => (
          <div className="news-card" key={news.id}>
            {news.galleries?.[0]?.fileName && (
              <img
                src={`${IMAGE_BASE_URL}${news.galleries[0].fileName}`}
                alt={news.title}
                loading="lazy"
              />
            )}

            <div className="news-content">
              <h2>{news.title}</h2>
              {news.createdAt && (
                <span className="news-date">
                  {new Date(news.createdAt).toLocaleDateString("ne-NP")}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="top-section">
        <p>समाचार</p>
        <h1>ताजा समाचारहरू</h1>
        <h4>
          <b>वडा र वरपरका समाचारहरूको संग्रह।</b>
        </h4>
      </div>

      {content}
    </>
  );
}

export default News;