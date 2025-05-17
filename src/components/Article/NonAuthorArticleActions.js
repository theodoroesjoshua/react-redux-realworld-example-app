import { useNavigate } from 'react-router-dom';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FollowUserButton } from '../Profile';
import { favoriteArticle, unfavoriteArticle } from '../../reducers/articleList';

/**
 * Favorite or unfavorite an article
 *
 * @param {Object} props
 * @param {String} props.article
 * @param {String} props.currentUser
 */
export function FavoriteArticleButton({ article, currentUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let classes = 'btn btn-sm action-btn';
  const textMessage = 'Favorite Article';

  if (article.favorited) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }
  const handleClick = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    if (article.favorited) {
      dispatch(unfavoriteArticle(article.slug));
    } else {
      dispatch(favoriteArticle(article.slug));
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <i className="ion-heart" />
      {textMessage} ({article.favoritesCount})
    </button>
  );
}

/**
 * Show the article actions for non authors
 * For non user, they will be redirected to the login page
 * @example
 * <NonAuthoerArticleActions />
 */
function NonAuthoerArticleActions({ article, currentUser }) {
  return (
    <span>
      <FollowUserButton
        username={article.author.username}
        following={article.author.following}
      />
      <FavoriteArticleButton article={article} currentUser={currentUser} />
    </span>
  );
}

export default memo(NonAuthoerArticleActions);
