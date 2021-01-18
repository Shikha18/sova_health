import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../Logo/sova_logo.png';


const navbar = () => {

    return (
        <div id="header-fixed" className={styles.container}>
            <div className={styles.nav}>
                <a><img className={styles.logo} src={logo} /></a>
                <a href="#Home">HOME</a>
                <a href="#Howitworks">HOW IT WORKS</a>
                <a href="#Pricing">PRICING</a>
                <a href="#Science">SCIENCE</a>
                <a href="#FAQs">FAQS</a>
                <a href="#About US">ABOUT US</a>
                <button className={styles.header_button}>GET STARTED</button>
            </div>
        </div>
    )
}

export default navbar;