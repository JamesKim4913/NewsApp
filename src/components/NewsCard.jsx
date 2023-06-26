import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TimeAgo from './TimeAgo';


const NewsCard = ({ data }) => {
  const {author, title, url, description, urlToImage, publishedAt} = data;

  // to show defaultImage when news don't have an image
  const defaultImage = "https://images.unsplash.com/photo-1644128225540-3b0388c7e230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1210&q=80";

  return (
    <Card sx={{ 
      m: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent:'center'
      }}>
      <Link to={ url } target="_blank">  
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage || defaultImage}
          alt={title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography>
            {author} : <TimeAgo timestamp={publishedAt} />
          </Typography>
        </CardContent>
        </CardActionArea>
      </Link>

      <CardActions disableSpacing sx={{ mt: "auto" }}>        
        <Link to={ url } target="_blank"> 
          <Button size="small" color="primary" variant="contained">Read More</Button> 
        </Link>       
      </CardActions>

    </Card>
  );
};

export default NewsCard;