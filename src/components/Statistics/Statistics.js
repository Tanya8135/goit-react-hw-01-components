import PropTypes from 'prop-types';

import data from 'data/data.json';

import StatisticsItem from 'components/StatisticsItem';

import style from './Statistics.module.css';

const Statistics = ({ title }) => {
    return (
        <div className={style['stat-container']}>
            <section className={style['stat-section']}>
                <h2 className={style['stat-title']}>{title}</h2>
                <ul className={style['stat-list']}>
                    {data.map((list) => (
                        <StatisticsItem key={list.id} {...list} />
                    ))
                    }
                </ul>
            </section>
        </div>
    );
};

Statistics.propTypes = {
    title: PropTypes.string
}

export default Statistics;