import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friend}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.avatarImg} src={avatar} alt={name} width="96" />
      {name}
    </li>
  );
};
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
