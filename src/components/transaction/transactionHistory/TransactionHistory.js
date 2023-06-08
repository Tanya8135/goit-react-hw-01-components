import NameHistory from "./NameHistory";
import InfoHistory from "./InfoHistory";
import transactions from "data/transactions.json";


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