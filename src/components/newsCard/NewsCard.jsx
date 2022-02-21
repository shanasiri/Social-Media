import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { createRef, useEffect, useState } from 'react'   
import useStyles from './styles.js'
import classNames from 'classnames';

function NewsCard({article, i, activeArticle}) {
  const classes = useStyles(); 

  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]){
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
      <CardActionArea href={article.url} target='_blank'>
        <CardMedia className={classes.media} image={article.urlToImage}/>

        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(article.publishedAt)).toDateString()}</Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>{article.source.name}</Typography>
        </div>

        <Typography className={classes.title} gutterBottom variant='h5'>{article.title}</Typography>

        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{article.description}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary'>Learn More</Button>
        <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard