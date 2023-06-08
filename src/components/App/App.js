import Profile from "components/Profile";
import Statistics from "components/Statistics";
import StatisticsItem from "components/StatisticsItem";
import Friend from "components/Friend";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";
import TransNameHistory from "components/TransNameHistory";
import TransInfoHistory from "components/TransInfoHistory";

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
        {data.map((list) => (
            <StatisticsItem key={list.id} {...list} />
        ))
        }
        <Statistics stats={data} />
        <Friend friends={friends} />
        {friends.map((listFriend) => (
            <FriendList key={listFriend.id} {...listFriend} />
        ))
        }
        <TransactionHistory items={transactions} />
        <TransNameHistory />
        {transactions.map((listTrans) => (
            <TransInfoHistory key={listTrans.id} {...listTrans} />
        ))}

    </div>
}

export default App;