import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import styles from './Health.module.css';
import Box from '../Health_Goal_boxes/Box';
import partnerImg from '../../Logo/partners.png';
import workImg from '../../Logo/hiw_summary.png';
import custImg from '../../Logo/news.png';


const sliderPhotos = [
    {
        name: 'Photo 1',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw0V3ihU-H46ozkpXyba4ayT&ust=1610517868558000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj34t7cle4CFQAAAAAdAAAAABAK'
    },
    {
        name: 'Photo 2',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw0V3ihU-H46ozkpXyba4ayT&ust=1610517868558000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj34t7cle4CFQAAAAAdAAAAABAK'
    },
    {
        name: 'Photo 3',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&psig=AOvVaw0V3ihU-H46ozkpXyba4ayT&ust=1610517868558000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj34t7cle4CFQAAAAAdAAAAABAK'
    },
    {
        name: 'Photo 4',
        url: {workImg}
    }
]


class health extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "slides"
          };

    return (

        <div className={styles.container}>
            <div><h1>WE HELP YOU ACHIEVE YOUR HEALTH GOALS</h1>
            <hr className={styles.divider}/>
            <br />
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/-3O3TVzbEJ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <div><h1>HOW IT WORKS?</h1>
            <hr className={styles.divider}/>
            <br />
            </div>
            <img className={styles.workImgs} src={workImg} />

            <div><h3>SEE HOW THE COMPLETE PROCESS WORKS</h3>
            <hr className={styles.divider}/>
            <br />
            </div>

            <div><h1>WHAT OUR CUSTOMER SAYS</h1>
            <hr className={styles.divider}/>
            <br />
            </div>

           


            <div><h1>OUR PARTNERS</h1>
            <hr className={styles.divider}/>
            <br />
            </div>
            <img className={styles.workImgs} src={partnerImg} />

            <div><h1>AS SEEN IN</h1>
            <hr className={styles.divider}/>
            <br />
            </div>
            <img className={styles.workImgs} src={custImg} />
            {/* <Box /> */}
        </div>
    )
}
}

export default health;