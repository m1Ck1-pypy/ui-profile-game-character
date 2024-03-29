import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';
import background from '../../assets/video/background.mp4';

const Home = () => {
    const navigate = useNavigate();

    // Счетчик обратного отсчета
    const [counter, setCounter] = useState(10);

    // хук таймера и перехода на страницу с характеристиками
    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            navigate('/features')
        }
    }, [counter]);

    return (
        <div className={styles.home__container}>
            <video src={background} autoPlay muted loop />
            <button type='button' className={styles.home__btn} onClick={() => navigate('/features')}>
                Играть
            </button>
            <div className={styles.home__counter}>
                <p>
                    {counter}
                </p>
            </div>
        </div>
    )
}

export default Home;