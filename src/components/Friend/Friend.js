import FriendList from 'components/FriendList/FriendList';

import friends from 'data/friends.json';

import style from './Friend.module.css';

const Friend = () => {
    return (
        <div className={style['friend-container']}>
            <ul className={style['friend-list']}>
                {friends.map((listFriend) => (
                    <FriendList key={listFriend.id} {...listFriend} />
                ))
                }
            </ul>
        </div>
    )
}

export default Friend