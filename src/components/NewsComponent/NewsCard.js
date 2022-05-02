import React from 'react'
import './news.css'
import { Container } from '@mui/material'

const NewsCard = ({ newsItem }) => {
    
    const fullDate = new Date(newsItem.publishedAt);
    var time = fullDate.toLocaleTimeString();
    var date = fullDate.getDate();
    var year = fullDate.getFullYear();
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    var day = weekday[fullDate.getDay()];
    var month = months[fullDate.getMonth()];

    if(date < 10){
      date = `0${date}`
    }

    var postDate = `${date} ${month} ${year}, ${day}`;
  return (
    <Container maxWidth="md" key={newsItem.title}>
            <div className='newsBox'>
                <img alt="news" src={newsItem.urlToImage ? newsItem.urlToImage : '/images/placeholder.png'} className="newsImage" />
            <div className='aboutNews'>
                    <div className='title-author'>
                        <span className='title'>{newsItem.title}</span>
                        <span className='author'>
                            <a href={newsItem.url}><b>News</b></a> by {newsItem.author ? newsItem.author : 'unknown'} / <span>{time} on {postDate}</span>    
                        </span>
                          <div className='description'>
                  {newsItem.description}
                </div>
                    </div>
                <div className='readMore'>
                    read more at {" "} <a href={newsItem.url}>
                      <b>{newsItem.source.name}</b>
                    </a>
                </div>
            </div>
            </div>
    </Container>
  )
}

export default NewsCard