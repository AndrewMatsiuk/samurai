import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi post 1', likes: 15 },
    { id: 2, message: 'Hi post 2', likes: 2 },
  ];

  let postsElements = postsData.map((p) => {
    return <Post message={p.message} likes={p.likes} />;
  });

  return (
    <div className={s.postsBlock}>
      <h2> My post</h2>
      <div>New post</div>
      <div>
        {' '}
        <textarea></textarea>
      </div>
      <button>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
