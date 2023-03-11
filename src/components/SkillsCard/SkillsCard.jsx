import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { basicParams } from '../../utils/data';
import styles from './SkillsCard.module.css';

const SkillsCard = ({ skills, characteristic }) => {
    console.log("🚀 characteristic:", characteristic)


    const [selectSkill, setSelectSkill] = useState(basicParams[0].key);

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
                {selectSkill && skills[selectSkill].map((item, index) => (
                    <div key={index} className={styles.skills__item}>
                        <div className={styles.item__title}>
                            <p>{item.title}</p>
                        </div>
                        <div className={styles.item__level}>
                            <div className={styles.item__levelValue}>
                                <p>Уровень: </p>
                                <span>{item.level}</span>
                            </div>
                            <div className={styles.item__arrowUp}>
                                {characteristic[selectSkill] >= item.level && (
                                    <FiArrowUp className={styles.arrow} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsCard;