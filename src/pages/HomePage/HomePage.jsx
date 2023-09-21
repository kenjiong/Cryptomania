import { useEffect, useState } from "react";
import newsicon from "../../assets/newsicon.png";

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
      <h3 className="text-center">
        <img className="newsicon" src={newsicon} />
        &nbsp;Latest Crypto News
      </h3>
      <br />
      {news.map((newsItem) => (
        <div className="container" key={newsItem.id}>
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img className="newsimg" src={`${newsItem.imgURL}`} />
            </div>
            <div className="col-8 text-left">
              <a
                href={`${newsItem.link}`}
                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
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
