import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div className={s.item}>
      My post
      <div>New post</div>
      <input></input>
      <button>Add post</button>
      <Post massage={'1 post'} likes={15} />
      <Post massage={'2 post'} likes={20} />
      <div>2 post</div>
    </div>
  );
};
