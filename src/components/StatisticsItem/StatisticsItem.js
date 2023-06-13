import PropTypes from 'prop-types';

import style from '../Statistics/Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className={style['stat-item']}>
            <span className={style['stat-label']}>{label}</span>
            <span className={style['stat-percentage']}>{percentage}%</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;