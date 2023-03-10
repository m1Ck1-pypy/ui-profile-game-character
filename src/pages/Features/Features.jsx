import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { incrementParams, decrementParams, takeDamage } from '../../redux/state';
import { CharacterInventary, FieldCharacterName, ProgressBar, ParamsCard } from '../../components';
import { basicParams, additionalParams } from '../../utils/data';
import swordImg from '../../assets/images/swordBtn.png';

import styles from './Features.module.css';


const variants = {
    initial: {
        opacity: 0,
        x: 50
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -50
    },
    transition: {
        duration: 0.3,
        ease: 'linear'
    }
};

const Features = () => {
    const dispatch = useDispatch();

    const level = useSelector((state) => state.global.level);
    const characteristic = useSelector((state) => state.global.basicCharacteristics);
    const additional = useSelector((state) => state.global.additionalCharacters());

    const [pageActive, setPageActive] = useState(true);

    const upgradeParams = (key) => {
        return () => dispatch(incrementParams(key))
    }

    const lowerParams = (key) => {
        return () => dispatch(decrementParams(key))
    }

    return (
        <div className={styles.features__wrapper}>

            <div className={styles.features__container}>
                <div className={styles.btn__battle} onClick={() => dispatch(takeDamage())}>
                    <img src={swordImg} alt="attack" />
                </div>
                <div className={styles.features__left}>
                    <FieldCharacterName />
                    <CharacterInventary />
                </div>
                <div className={styles.features__right}>
                    <ProgressBar level={level} />
                    <div className={styles.features__partition}>
                        <p onClick={() => setPageActive(true)}>Характеристики</p>
                        <p onClick={() => setPageActive(false)}>Способности</p>
                    </div>
                    {pageActive ? (
                        <motion.div {...variants} className={styles.features__cards}>
                            <ParamsCard
                                title="Основные"
                                params={basicParams}
                                characteristic={characteristic}
                                incrementParams={upgradeParams}
                                decrementParams={lowerParams}
                            />
                            <ParamsCard
                                title="Дополнительные"
                                params={additionalParams}
                                additional={additional}
                            />
                        </motion.div>
                    ) : (
                        <div>123</div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Features