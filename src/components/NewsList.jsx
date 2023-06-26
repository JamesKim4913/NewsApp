import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';

// Generate a news card by receiving a news list in newsContext

const NewsList = () => {
  const { news } = useContext(NewsContext);

  return (
    <Grid container spacing={2}>
      {news.map((data, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <NewsCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
