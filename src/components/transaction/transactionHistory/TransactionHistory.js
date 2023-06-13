import NameHistory from 'components/Transaction/TransactionHistory/NameHistory';
import InfoHistory from 'components/Transaction/TransactionHistory/InfoHistory';
import transactions from 'data/transactions.json';


const TransactionHistory = () => {
    return (
        <>
            <NameHistory />
            {transactions.map((listTrans) => (
                <InfoHistory key={listTrans.id} {...listTrans} />
            ))}

        </>
    )
}

export default TransactionHistory;