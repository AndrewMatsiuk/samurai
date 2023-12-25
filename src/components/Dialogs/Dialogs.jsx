import { DialogItem } from './DialogItem';
import s from './Dialogs.module.css';
import { Messages } from './Message';

export const Dialogs = (props) => {
  const { messages } = props;

  let dialogsData = [
    { id: 1, name: 'Andrii' },
    { id: 2, name: 'Oleg' },
    { id: 3, name: 'Marko' },
    { id: 4, name: 'Matias' },
    { id: 5, name: 'Levron' },
    { id: 6, name: 'Vlad' },
  ];

  let messagesData = [
    { value: 'Hey' },
    { value: 'Hey1' },
    { value: 'Hey2' },
    { value: 'Hey3' },
    { value: 'Hey4' },
  ];

  let dialogsElement = dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElement = messages.map((messages) => {
    return <Messages value={messages.value} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.massages}>{messagesElement}</div>
    </div>
  );
};
