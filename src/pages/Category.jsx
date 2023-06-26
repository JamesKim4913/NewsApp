// Used when a category is clicked

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import { getNewsByCategory } from '../services/api';
import NewsContext from '../context/NewsContext';

const Category = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      const categoryNews = await getNewsByCategory(category);
      setNews(categoryNews);
    };

    fetchNewsByCategory();
  }, [category]);

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

export default Category;
