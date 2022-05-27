import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
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
    <li className={styles.item} key={id}>
      <span className={styles.status}>{isOnline ? '🟢' : '🔴'}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

DrawFriend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
