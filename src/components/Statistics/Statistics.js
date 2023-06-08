import PropTypes from 'prop-types';

const Statistics = ({title}) => {
    return (
        <div className="stat-container">
            <section className="stat-section">
                <h2 className="stat-title">{title}</h2>
                <ul className="stat-list">
                </ul>
            </section>
        </div>
    );
};

Statistics.propTypes = {
    title: PropTypes.string
}

export default Statistics;