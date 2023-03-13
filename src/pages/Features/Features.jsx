import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { incrementParams, decrementParams, takeDamage } from '../../redux/state';
import { CharacterInventary, FieldCharacterName, ProgressBar, ParamsCard, SkillsCard, ExportData } from '../../components';
import { basicParams, additionalParams, partition_list, variants } from '../../utils/data';
import swordImg from '../../assets/images/swordBtn.png';

import styles from './Features.module.css';

// Компонент для выбора вкладки меню (Характеристики, Способности)
const Partition = ({ title, id, setActive, active }) => {
    return (
        <>
            {active === id ? (
                <p className={styles.activePage} onClick={() => setActive(id)} >
                    {title}
                </p>
            ) : (
                <p className={styles.noactivePage} onClick={() => setActive(id)} >
                    {title}
                </p>
            )}
        </>
    )
};

// Компонент страницы с характеристиками персонажа 
const Features = () => {
    const dispatch = useDispatch();

    // Получение значений из state
    const level = useSelector((state) => state.global.level);
    const characteristic = useSelector((state) => state.global.basicCharacteristics);
    const additional = useSelector((state) => state.global.additionalCharacters());
    const skills = useSelector((state) => state.global.skillsCharacter);

    // Активный пункт меню (по id)
    const [active, setActive] = useState(0);

    // Функция для отправки увеличенного значения в state для его изменения (reduser)
    const upgradeParams = (key) => {
        return () => dispatch(incrementParams(key))
    };

    // Функция для отправки уменьшенного значения в state для его изменения (reduser)
    const lowerParams = (key) => {
        return () => dispatch(decrementParams(key))
    };

    return (
        <div className={styles.features__wrapper}>
            <div className={styles.features__container}>
                <div className={styles.features__left}>
                    <FieldCharacterName />
                    <CharacterInventary />
                </div>
                <div className={styles.features__right}>
                    <div className={styles.features_progressbar}>
                        <ProgressBar level={level} />
                        <div className={styles.btn__battle} onClick={() => dispatch(takeDamage())}>
                            <img src={swordImg} alt="attack" />
                        </div>
                    </div>
                    <div className={styles.features__partition}>
                        {partition_list && partition_list.map((item, index) => (
                            <Partition key={index} title={item.title} id={index} active={active} setActive={setActive} />
                        ))}
                        <ExportData />
                    </div>
                    {active === 0 ? (
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
                        <motion.div {...variants} className={styles.features__cards}>
                            <SkillsCard skills={skills} characteristic={characteristic} />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Features;