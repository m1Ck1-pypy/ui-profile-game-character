import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { HiOutlinePencil } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs'
import styles from './Features.module.css';

import { inventoryItems } from '../../utils/data';
import character from '../../assets/images/character.png';

const Features = () => {
    const nameCharacter = useSelector((state) => state.global.name);
    const [fieldName, setFieldName] = useState(nameCharacter);
    const [disabledFieldName, setDisabledFieldName] = useState(true);
    const [maxNameCharacter, setMaxNameCharacter] = useState(false);

    const handleClickRename = () => {
        setDisabledFieldName(!disabledFieldName);
    }
    return (
        <div className={styles.features__wrapper}>
            <div className={styles.features__container}>
                <div className={styles.features__left}>
                    <div className={styles.features__left_name}>
                        <input type="text" value={fieldName} autoFocus onChange={(e) => setFieldName(e.target.value)} disabled={disabledFieldName} />
                        <div className={styles.features__left_rename} onClick={handleClickRename}>
                            {disabledFieldName ? <HiOutlinePencil /> : <BsCheckLg className={styles.rename__icon} />}
                        </div>
                    </div>
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
                </div>
                <div className={styles.features__right}>
                    rightz
                </div>
            </div>
        </div>
    )
}

export default Features