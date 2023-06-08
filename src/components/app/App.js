import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import Friend from 'components/Friend';
import Transaction from 'components/Transaction';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

const App = () => {
    return <div className="app-container">
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> якщо розкомітити, то двоїть рендер */}
        <Friend friends={friends} />
        <Transaction items={transactions} />
    </div>
}

export default App;