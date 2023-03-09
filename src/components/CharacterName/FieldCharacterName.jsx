import React, { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs'

import styles from './FieldCharacteName.module.css';
import { useSelector } from 'react-redux';

const FieldCharacterName = () => {

    const nameCharacter = useSelector((state) => state.global.name);
    const [fieldName, setFieldName] = useState(nameCharacter);
    const [disabledFieldName, setDisabledFieldName] = useState(true);

    const handleClickRename = () => {
        setDisabledFieldName(!disabledFieldName);
    }

    return (
        <div className={styles.features__left_name}>
            <input type="text" value={fieldName} autoFocus onChange={(e) => setFieldName(e.target.value)} disabled={disabledFieldName} />
            <div className={styles.features__left_rename} onClick={handleClickRename}>
                {disabledFieldName ? <HiOutlinePencil /> : <BsCheckLg className={styles.rename__icon} />}
            </div>
        </div>
    )
}

export default FieldCharacterName