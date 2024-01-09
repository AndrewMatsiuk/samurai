import React from 'react';
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../redux/profile-reducer';

import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
  const { posts, dispatch, newPostText } = props;

  let postsElements = posts.map((p) => {
    return <Post id={p.id} message={p.message} likes={p.likes} />;
  });

  let newPostElement = React.createRef();

  function addPost1() {
    // addPost(newPostElement.current.value);
    dispatch(addPostActionCreator());
  }

  function onPostChange() {
    // updateNewPostText(newPostElement.current.value);
    dispatch(updateNewPostActionCreator(newPostElement.current.value));
  }

  return (
    <div className={s.postsBlock}>
      <h2> My post</h2>
      <div>New post</div>
      <div>
        {' '}
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={newPostText}
          placeholder='Write new post'
        />
      </div>
      <button onClick={addPost1}>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
