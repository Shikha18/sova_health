import React from 'react';
import styles from './Food.module.css';
import cross from '../../Logo/cross.png';

const food = () => {
    return (
        <div className={styles.container}>
            <div><h1>REDEFINE YOUR RELATIONSHIP WITH FOOD</h1>
            <hr className={styles.divider}/>
            <br />
            </div>

            <div className={styles.diet}>
                <div><img className={styles.cross} src={cross} />No Diet Charts</div>
                <div><img className={styles.cross} src={cross} />No Restrictive Diets </div>
                <div><img className={styles.cross} src={cross} /> <i class="fa fa-home"></i>No Staying Hungry</div>
            </div>
        </div>
    )
}

export default food;