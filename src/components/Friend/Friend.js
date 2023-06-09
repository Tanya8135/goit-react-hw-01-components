
import style from './Friend.module.css';

const Friend = () => {
    return (
        <div className={style['friend-container']}>
            <ul className={style['friend-list']}></ul>
        </div>
    )
}

export default Friend