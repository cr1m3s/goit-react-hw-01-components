import './App.css';
import Components from './components/Components';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transaktions.json';

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
