import React from 'react';
import styles from './Footer.module.css';
import phoneIcon from '../../Logo/telephone-icon.png';
import mailIcon from '../../Logo/mail.png';
import fb from '../../Logo/fb.png';
import insta from '../../Logo/insta.png';
import twitter from '../../Logo/twitter.png';
import youtube from '../../Logo/youtube.png';


const footer = () => {
    return (
        <div>
            {/* <hr className={styles.divider}/> */}
        <div className={styles.container}>
            <div className={styles.left}>
            <div>
            Just good content. No spam.
            <br />
            Sign up for our newsletter
            <br />
            <br />
            <br />
            </div>
            <div>
                <input className={styles.input} type='text' placeholder="your email" />
                <br /><br />
                <button className={styles.submit}>Submit</button>
            </div>
            </div>
            <div className={styles.right}>
                <span><img className={styles.phone} src={phoneIcon} alt='phone' /><span>91 9811 574 691</span></span>
                <br />
                <span><img className={styles.mail} src={mailIcon} alt='mail' /><span>support@sova.health</span></span>
            </div>

            <div>
            </div>
        </div>
        <div className={styles.icons}>
            <div>
                <img className={styles.iconSize} src={fb} alt='fb' />
                <img className={styles.iconSize} src={insta} alt='insta' />
                <img className={styles.iconSize} src={twitter} alt='twitter' />
                <img className={styles.iconSize} src={youtube} alt='youtube' />
            </div>
        </div>
            <div className={styles.footer}>
            WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED
            </div>
        </div>
    )
}

export default footer;