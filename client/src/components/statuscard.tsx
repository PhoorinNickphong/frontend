import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/statuscard.css';



function StatusCard() {
  return (
    <Card sx={{ maxWidth: 345 , borderRadius: '20px' }}>
      <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      <Card >
        <CardMedia
          component="img"
          height="140"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1496F/production/_116553348_mansleepsgettyimages.png"
          alt="Image"
        />
        <CardContent className='box'>
          <Typography  gutterBottom variant="h5" component="div">
            <p className='text3'>กิจกรรมวิ่งไล่ควาย MOCK</p>
          </Typography>
          <Typography variant="body2" >
          <p className='text2'>สถานะกิจกรรม : MOCK </p>
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
}


export default  StatusCard;