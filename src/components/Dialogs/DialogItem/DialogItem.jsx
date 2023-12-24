import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

export const DialogItem = (props) => {
  const { name, id } = props;

  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`}> {name} </NavLink>
    </div>
  );
};
