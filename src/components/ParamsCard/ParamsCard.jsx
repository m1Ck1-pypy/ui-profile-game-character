import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import styles from './Params.module.css';

// Коапонент для отображения карточки параметров (базовых и дополнительных)
/* 
    title - название параметра
    params - массив с ключем, название, иконкой базовых или дополнительных параметров
    characteristic - объект с базовыми параметрами и их значениями из state
    additional - объект с дополнительными параметрами и их значениями из state
    incrementParams - функция для увеличения базового парметра на 1
    decrementParams - функция для уменьшения базового парметра на 1
*/
const ParamsCard = ({ title, params, characteristic, additional, incrementParams, decrementParams }) => {
    return (
        <div className={styles.card__container}>
            <p className={styles.card__title}>{title}</p>
            <div className={styles.card__list}>
                {params && params.map((item, index) => (
                    <div key={index} className={styles.card__item}>
                        <div className={styles.item__data}>
                            <div className={styles.item__img}><img src={item.icon} alt="" /></div>
                            <p>{item.title}:</p>
                        </div>
                        <div className={styles.item__count}>
                            {characteristic ? (
                                <div className={`${styles.item__btn} ${styles.green__btn}`} onClick={incrementParams(item.key)}>
                                    <FiPlus />
                                </div>
                            ) : (
                                null
                            )}

                            {characteristic && (
                                <div className={styles.item__value} style={{ minWidth: '30px' }}>{characteristic ? characteristic[item.key] : 0}</div>
                            )}

                            {additional && (
                                <div className={styles.item__value} style={{ minWidth: '30px' }}>{additional ? additional[item.key] : 0}</div>
                            )}

                            {characteristic ? (
                                <div className={`${styles.item__btn} ${styles.red__btn}`} onClick={decrementParams(item.key)}>
                                    <FiMinus />
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ParamsCard