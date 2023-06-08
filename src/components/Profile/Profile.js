import PropTypes from 'prop-types';

import style from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
        <div className={style.profile}>
            <div className={style['profile-description']}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={style['profile-avatar']}
                />
                <p className={`${style['profile-text']} ${style['profile-name']}`}>{username}</p>
                <p className={`${style['profile-text']} ${style['profile-tag']}`}>@{tag}</p>
                <p className={`${style['profile-text']} ${style['profile-location']}`}>{location}</p>
            </div>

            <ul className={style['profile-stats']}>
                <li className={style['profile-stats-item']}>
                    <span className={style['profile-label']}>Followers</span>
                    <span className={style['profile-quantity']}>{stats.followers}</span>
                </li>
                <li className={style['profile-stats-item']}>
                    <span className={style['profile-label']}>Views</span>
                    <span className={style['profile-quantity']}>{stats.views}</span>
                </li>
                <li className={style['profile-stats-item']}>
                    <span className={style['profile-label']}>Likes</span>
                    <span className={style['profile-quantity']}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

/* добавить propTyps */
Profile.protoTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;