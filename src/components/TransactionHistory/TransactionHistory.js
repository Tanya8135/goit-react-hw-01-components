import style from './TransactionHistory.module.css';

const Transaction = () => {
    return (
        <div>
            <table className={style['transaction-history']}></table>
        </div>
    )
}

export default Transaction;