import s from './Post.module.css';

export const Post = (props) => {
  const { massage, likes } = props;
  return (
    <div className={s.item}>
      <img src='data:image/png;base64,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' />
      {massage}
      <div>
        <span>likes: </span>
        {likes}
      </div>
    </div>
  );
};
