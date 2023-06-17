import TransNameHistory from 'components/TransNameHistory';
import TransInfoHistory from 'components/TransInfoHistory';

import transactions from 'data/transactions.json';

import style from './TransactionHistory.module.css';

const Transaction = () => {
    return (
        <div>
            <table className={style['transaction-history']}>
                <TransNameHistory />
                {transactions.map((listTrans) => (
                    <TransInfoHistory key={listTrans.id} {...listTrans} />
                ))}
            </table>
        </div>
    )
}

export default Transaction;