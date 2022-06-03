import './App.css';
import Components from './components/Components/Components';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import data from './components/Components/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transaktions.json';

function App() {
  return (
    <div>
      <section className="profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className="components">
        <Components items={data} />
      </section>
      <section className="friends">
        <FriendList friends={friends} />
      </section>
      <section className="transactions">
        <TransactionHistory transactions={transactions} />
      </section>
    </div>
  );
}

export default App;
