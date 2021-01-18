import React from 'react';
import styles from './Box.module.css';


const box = () => {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.col}>
                <h2>Column 1</h2>
                <p>Hello World</p>
            </div>
                
            <div className={styles.col}>
                <h2>Column 2</h2>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
            </div>
                    
            <div className={styles.col}>
                <h2>Column 3</h2>
                <p>Some other text..</p>
                <p>Some other text..</p>
                </div>
            </div>

        </div>
    )
}

export default box;