import React, { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux';
import { rename } from '../../redux/state';

import styles from './FieldCharacteName.module.css';

// КОмпонент изменения имени песонажа
const FieldCharacterName = () => {
    const dispatch = useDispatch();

    // Получение имени из state
    const nameCharacter = useSelector((state) => state.global.name);

    const [fieldName, setFieldName] = useState(nameCharacter); // Хранение и изменение имени
    const [disabledFieldName, setDisabledFieldName] = useState(true); // Задание атрибута disabled в поле input

    // Отправка имени в state и сохранение его
    const handleClickRename = (key) => {
        dispatch(rename(key));
        setDisabledFieldName(prev => !prev);
    }

    return (
        <div className={styles.features__left_name}>
            <input type="text" value={fieldName} autoFocus onChange={(e) => setFieldName(e.target.value)} disabled={disabledFieldName} />
            <div className={styles.features__left_rename} onClick={() => handleClickRename(fieldName)}>
                {disabledFieldName ? <HiOutlinePencil /> : <BsCheckLg className={styles.rename__icon} />}
            </div>
        </div>
    )
}

export default FieldCharacterName