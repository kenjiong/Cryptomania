import { useEffect, useState } from "react";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://api.coinstats.app/public/v1/news/trending?skip=0&limit=5`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      {news.map((newsItem) => (
        <div className="container" key={newsItem.id}>
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img className="newsicon" src={`${newsItem.imgURL}`} />
            </div>
            <div className="col-8 text-left">
              <a href={`${newsItem.link}`}>
                <h4>{newsItem.title}</h4>
              </a>
              <p dangerouslySetInnerHTML={{ __html: newsItem.description }}></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
