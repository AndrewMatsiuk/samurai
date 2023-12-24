import s from './ProfileInfo.module.css';

export const ProfileInfo = (props) => {
  const { avatarUrl } = props;
  return (
    <div>
      <div>
        <img src={avatarUrl} />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
