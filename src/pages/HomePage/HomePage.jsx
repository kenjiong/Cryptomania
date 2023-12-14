import { useEffect, useState } from "react";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://openapiv1.coinstats.app/news/type/trending?limit=5`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": "zS+xwg1S0eBD4554v8Q1G4K+dJiLrbVmGpCLGJR+Lko=",
          },
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <h3 className="text-center">
        <img className="newsicon" src="/newsicon.png" />
        &nbsp;Trending Crypto News
      </h3>
      <br />
      {news.map((newsItem) => (
        <div className="container" key={newsItem.id}>
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img className="newsimg" src={`${newsItem.imgUrl}`} />
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
