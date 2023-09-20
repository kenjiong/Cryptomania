import { useEffect, useState } from "react";

export default function HomePage() {
const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://api.coinstats.app/public/v1/news/latest?skip=0&limit=5`;
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
      <div key={newsItem.id}>
      <a href={`${newsItem.link}`}><h3>{newsItem.title}</h3></a>
      <p dangerouslySetInnerHTML={{__html: newsItem.description}}></p>
      </div>
      ))}
      </>
  );
}
