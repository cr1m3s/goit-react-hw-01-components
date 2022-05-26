import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <DrawFriend
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

function DrawFriend({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline ? '🟢' : '🔴'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

DrawFriend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
