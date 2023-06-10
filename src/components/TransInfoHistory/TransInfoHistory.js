import PropTypes from "prop-types";

import style from './TransInfoHistory.module.css';

const InfoHistory = ({ type, amount, currency }) => {
    return (
        <tbody className={style['info-hstr-container']}>
            <tr className={style['line-bg']}>
                <td className={`${style.text} ${style['info-tablet']}`}>{type}</td>
                <td className={style['info-tablet']}>{amount}</td>
                <td className={style['info-tablet']}>{currency}</td>
            </tr>
        </tbody>
    );
};

InfoHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default InfoHistory;