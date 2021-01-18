import React from 'react';
import styles from './Main.module.css';
import SovaImage from '../../Logo/sova_Image.png';



const main = () => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <div>
            <h3 className={styles.leftItems}>Discover a Healthier You</h3>
            <hr className={styles.divider}/>
            <br />
            <p>Get a personalized nutrition program based on <br /> your lifestyle,
                 habits and blood analysis.</p>
            </div>
            <button className={styles.learnButton}>Learn More</button>
            </div>
            <div className={styles.right}>
            <img className={styles.sovaImage} src={SovaImage} alt='image' />
            </div>
        </div>
    )
}

export default main;