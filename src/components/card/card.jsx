import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Portfolio from '../Works/assets/portfolio.jpg';
import ('./card.scss')

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='cardContainer'>
      <CardMedia
        component="img"
        alt="portfolio"
        height="140"
        image={Portfolio}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          portfolio web site
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is my first project, it is a portfolio web site
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>window.open("https://github.com/Juniorwebprogrammer/portfolio")}>Go to GitHub</Button>
      </CardActions>
    </Card>
  );
}