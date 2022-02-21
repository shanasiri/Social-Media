import React from 'react'
import Navbar from '../../components/navbar/Navbar'
//import Sidebar from '../../components/sidebar/Sidebar'
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import wordsToNumbers from "words-to-numbers";
import NewsCards from '../../components/newsCards/NewsCards';
import './news.css';

const alanKey = 'ecb7f1efcbff377f5f3a3721f5527d492e956eca572e1d8b807a3e2338fdd0dc/stage';

export default function News() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(0)

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number}) => {
                if(command === 'newHeadlines'){
                setNewsArticles(articles);
                setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if(command === 'open'){
                const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20){
                        alanBtn().playText('Please try that again.');
                    }
                    else if(article){
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            }
        })
    }, []);

  return (
      <>
        <Navbar></Navbar>

        <div className='news-section'>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
      </>
    
  )
}
