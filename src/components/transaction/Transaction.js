import TransactionHistory from 'components/Transaction/TransactionHistory';

const Transaction = () => {
    return (
        <div>
            <table className="transaction-history">
                <TransactionHistory />
            </table>
        </div>
    )
}

export default Transaction;