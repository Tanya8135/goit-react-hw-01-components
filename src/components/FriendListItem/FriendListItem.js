import PropTypes from "prop-types";

import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusColor = isOnline ? style.online : style.offline;

    return (
        <li className={style['friend-item']}>
            <span className={`${style['friend-status']} ${statusColor}`}></span>
            <img className={style['friend-avatar']} src={avatar} alt="User avatar" width="48" />
            <p className={style['friend-name']}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;