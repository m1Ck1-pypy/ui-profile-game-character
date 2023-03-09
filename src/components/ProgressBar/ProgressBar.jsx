import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './ProgressBar.module.css';

const ProgressBar = ({ level }) => {
    const [progress, setProgress] = useState(90);

    useEffect(() => {
        if (progress >= 100) {
            setProgress(0);
        }
    }, [progress])

    const handleClick = () => {
        setProgress(() => progress + 1)
    }

    return (
        <div className={styles.progressbar__container}>
            <p onClick={handleClick}>Ур. {level}</p>
            <div className={styles.progressbar__field}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.progressbar__progress} style={{ width: progress + "%" }}></motion.div>
                <span style={{ color: progress < 50 ? "#fff" : "#343434" }}>{progress}%</span>
            </div>
        </div>
    )
}

export default ProgressBar