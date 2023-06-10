import FriendListItem from 'components/FriendListItem';

import friends from 'data/friends.json';

import style from './FriendList.module.css';

const FriendList = () => {
    return (
        <div className={style['friend-container']}>
            <ul className={style['friend-list']}>
                {friends.map((listFriend) => (
                    <FriendListItem key={listFriend.id} {...listFriend} />
                ))
                }
            </ul>
        </div>
    )
}

export default FriendList;