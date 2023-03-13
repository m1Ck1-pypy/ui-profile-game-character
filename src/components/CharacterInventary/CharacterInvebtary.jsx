import React from 'react';

import styles from './CharacterInvebtary.module.css';
import { inventoryItems } from '../../utils/data';
import character from '../../assets/images/character_v2.png';

// Компонент отрисовки инвентаря персонажа
const CharacterInvebtary = () => {
    return (
        <div className={styles.features__left_character}>
            {inventoryItems && inventoryItems.map((item, index) => (
                <div key={index} className={styles.character__inventary_row}>
                    <div className={styles.inventary__item}>
                        <img src={item.item1} alt="" className={styles.imgItem} />
                    </div>
                    <div className={styles.inventary__item}>
                        <img src={item.item2} alt="" className={styles.imgItem} />
                    </div>
                </div>
            ))}
            <div className={styles.container__imgCraracter}>
                <img src={character} alt="" className={styles.imgCharacter} />
                <div className={styles.character__shadow}></div>
            </div>
        </div>
    )
}

export default CharacterInvebtary