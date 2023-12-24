import s from './../Dialogs.module.css';

export const Messages = (props) => {
  const { value } = props;
  return <div className={s.massage}>{value}</div>;
};
