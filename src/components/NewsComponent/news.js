import React from 'react'
import NewsCard from './NewsCard'
import { Container } from '@mui/material';

const news = ({newsArray, newsResults, loadMore, setloadMore}) => {
  return(
    <Container maxWidth="md">
      {newsArray.map(newsItem=>{
        return(
          <NewsCard newsItem={newsItem} key={newsItem.title}/>
        )
      })}
      
      {loadMore <= newsResults && (
        <div className='loadMore'>
          <button onClick={() => setloadMore(loadMore + 5)}>Load More</button>
        </div>
      )}

    </Container>
  )
}

export default news