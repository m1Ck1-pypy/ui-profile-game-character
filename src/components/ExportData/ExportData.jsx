import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDownload, MdUpload } from 'react-icons/md';
import { saveAs } from 'file-saver';

import styles from './ExportData.module.css';
import { rename } from '../../redux/state';

const ExportData = () => {
    const dispatch = useDispatch();

    const basicData = useSelector((state) => state.global);
    const additionalData = useSelector((state) => state.global.additionalCharacters());


    const [dataFile, setDataFile] = useState('');
    const [error, setError] = useState('');

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
            fileName: 'dataCharacter.json',
            fileType: 'text/json',
        })
    }

    const readFileOnUpload = (uploadedFile) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            try {
                setDataFile(JSON.parse(fileReader.result));
                setError('Not Error')
            } catch (error) {
                setError('**Not valid JSON file!**')
            }
        }
        if (uploadedFile !== undefined) {
            fileReader.readAsText(uploadedFile)
        }
    }


    return (
        <div className={styles.export__container} title="Скачать данные персонажа">
            <div className={styles.export__btn} onClick={exportToJson}>
                <MdDownload className={styles.export__icon} />
                <p className={styles.export__text}>Скачать</p>
            </div>
            <label htmlFor="upload">
                <div className={styles.export__btn} title="Загрузить данные персонажа">
                    <MdUpload className={styles.export__icon} />
                    <p className={styles.export__text}>Загрузить</p>
                    <input type="file" name="uploadFile" id="upload" onChange={(e) => readFileOnUpload(e.target.files[0])} />
                </div>
            </label>
        </div>
    )
}

export default ExportData