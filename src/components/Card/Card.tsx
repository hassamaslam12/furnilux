import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'




export default function MediaCard(props:any) {
 
  return (
  
     <div className='d-flex'>
    {props.cardDetails.map((cardDetail:any,index:number)=>
       <Card sx={{ maxWidth: 220 }} key={index}>
      <CardMedia
        sx={{ height: 200,width: 220 }}
        image={cardDetail.CardImage}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {cardDetail.CardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         $ {cardDetail.CardPrice}
        </Typography>
      </CardContent>
     
    </Card>
    )
    }
   
        </div>
  );
}
