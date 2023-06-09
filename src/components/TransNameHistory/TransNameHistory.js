import style from './TransNameHistory.module.css';

const NameHistory = () => {
    return (
        <thead className={style['name-hstr-container']}>
            <tr className={style['tablet-hstr']}>
                <th className={style['tablet-name']}>Type</th>
                <th className={style['tablet-name']}>Amount</th>
                <th className={style['tablet-name']}>Currency</th>
            </tr>
        </thead>
    )
}

export default NameHistory;