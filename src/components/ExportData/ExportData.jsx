import React from 'react';
import { useSelector } from 'react-redux';
import { MdDownload, MdUpload } from 'react-icons/md';
import { saveAs } from 'file-saver';

import styles from './ExportData.module.css';

const ExportData = () => {
    const basicData = useSelector((state) => state.global);
    const additionalData = useSelector((state) => state.global.additionalCharacters());

    const fullParamsData = {
        ...basicData,
        additionalData
    }

    const dataJSON = JSON.stringify(fullParamsData, null, 2);

    const downloadFile = ({ data, fileName, fileType }) => {
        const blob = new Blob([data], { type: fileType })
        saveAs(blob, fileName);
    }

    const exportToJson = (e) => {
        e.preventDefault()
        downloadFile({
            data: dataJSON,
            fileName: 'users.json',
            fileType: 'text/json',
        })
    }

    return (
        <div className={styles.export__container} title="Скачать данные персонажа">
            <div className={styles.export__btn} onClick={exportToJson}>
                <MdDownload className={styles.export__icon} />
                <p className={styles.export__text}>Скачать</p>
            </div>
            <div className={styles.export__btn} title="Загрузить данные персонажа">
                <MdUpload className={styles.export__icon} />
                <p className={styles.export__text}>Загрузить</p>
            </div>
        </div>
    )
}

export default ExportData