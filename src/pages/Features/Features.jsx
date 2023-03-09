import { useState } from 'react';
import { useSelector } from 'react-redux';

import { CharacterInventary, FieldCharacterName, ProgressBar } from '../../components';


import styles from './Features.module.css';

const Features = () => {
    const level = useSelector((state) => state.global.level);
    return (
        <div className={styles.features__wrapper}>
            <div className={styles.features__container}>
                <div className={styles.features__left}>
                    <FieldCharacterName />
                    <CharacterInventary />
                </div>
                <div className={styles.features__right}>
                    <ProgressBar level={level} />
                </div>
            </div>
        </div>
    )
}

export default Features