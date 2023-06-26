import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import NewsContext from '../context/NewsContext';
import { getLatestNews } from '../services/api';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const latestNews = await getLatestNews();

      // only the required parts of the entire news data
      
      const requiredData = latestNews.map((data) => {
        return {  
          author: data.author,        
          title: data.title,
          url: data.url,
          urlToImage: data.urlToImage,
          publishedAt: data.publishedAt,          
          content: data.content,
        };
      });

      setNews(requiredData);
    };

    fetchLatestNews();
  }, []);

  // If news content is null
  if (!news) {
    return null;
  }

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
      }}
    >
      <NewsList />
    </NewsContext.Provider>    
  );
};

export default Home;
