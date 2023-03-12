import React, { useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { levelUpSkill } from '../../redux/state';
import { basicParams, levelOptions } from '../../utils/data';
import styles from './SkillsCard.module.css';

const titleLevel = (level, color = 0) => {
    const levelObj = levelOptions.find((item) => item.level === level)
    if (color) {
        return levelObj.color
    } else {
        return levelObj.title
    }
}

const SkillsCard = ({ skills, characteristic }) => {
    const dispatch = useDispatch();

    const [selectSkill, setSelectSkill] = useState(basicParams[0].key);

    const handleLevelUp = (skills, title) => {
        return () => dispatch(levelUpSkill([skills, title]));
    }

    // console.log(`🚀 characteristic[${selectSkill}]:`, characteristic[selectSkill])

    return (
        <div className={styles.skills__container}>
            <div className={styles.skills__param}>
                {basicParams && basicParams.map((item, index) => (
                    <div
                        key={index}
                        className={selectSkill === item.key ? `${styles.params__box} ${styles.active}` : `${styles.params__box}`}
                        onClick={() => setSelectSkill(item.key)}
                    >
                        <img src={item.icon} alt={item.title} />
                    </div>
                ))}
            </div>

            <div className={styles.skills__list}>
                {selectSkill && skills.map((item, index) => item.key === selectSkill && (
                    <div key={index} className={styles.skills__item}>
                        <div className={styles.item__title}>
                            <p>{item.title}</p>
                        </div>
                        <div className={styles.item__level}>
                            <div className={styles.item__levelValue}>
                                <span style={{ color: titleLevel(item.level, 1) }}>{titleLevel(item.level)}</span>
                            </div>
                            <div className={styles.item__arrowUp} onClick={handleLevelUp(selectSkill, item.title)}>
                                {
                                    ((characteristic[selectSkill] === item.level) || (item.level >= 5)) ? (
                                        null
                                    ) : (
                                        <FiArrowUp className={styles.arrow} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default SkillsCard;