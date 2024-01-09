import React from 'react';
import {
  addNewMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';

import { DialogItem } from './DialogItem';
import s from './Dialogs.module.css';
import { Messages } from './Message';

export const Dialogs = (props) => {
  const { messages, dispatch, dialogs, newMessageText } = props;

  let dialogsElement = dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElement = messages.map((messages) => {
    return <Messages value={messages.value} />;
  });

  let newMessageElement = React.createRef();

  function addMessage() {
    // addNewMessage();
    dispatch(addNewMessageActionCreator());
  }

  function onMessageChange() {
    // updateNewMessageText(newMessageElement.current.value);
    dispatch(updateNewMessageActionCreator(newMessageElement.current.value));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div>
        {' '}
        <div className={s.massages}>{messagesElement}</div>
        <div className={s.inputMessage}>
          {' '}
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={newMessageText}
            placeholder='Write new message'
          />
          <button onClick={addMessage}>Add new Message</button>
        </div>
      </div>
    </div>
  );
};
