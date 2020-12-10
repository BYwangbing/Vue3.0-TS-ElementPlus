import {
  IMessageHandle,
  IMessageOptions
} from 'element-plus/lib/el-message/src/types';

import Message from 'element-plus/lib/el-message';
// import ElMessageBox from 'element-plus/types/message-box';
import MessageBox from 'element-plus/lib/el-message-box';

// import ElNotification from 'element-plus/types/el-notification';
import Notify from 'element-plus/lib/el-notification';

// Message
interface ElMessage {
  (text: string): IMessageHandle;
  (options: IMessageOptions): IMessageHandle;
  success(text: string): IMessageHandle;
  success(options: IMessageOptions): IMessageHandle;
  warning(text: string): IMessageHandle;
  warning(options: IMessageOptions): IMessageHandle;
  info(text: string): IMessageHandle;
  info(options: IMessageOptions): IMessageHandle;
  error(text: string): IMessageHandle;
  error(options: IMessageOptions): IMessageHandle;
}

const message = function(arg: string | IMessageOptions): IMessageHandle {
  return Message(arg);
} as ElMessage;

['success', 'warning', 'info', 'error', ''].forEach(element => {
  const type = element as 'success' | 'warning' | 'info' | 'error';
  message[type] = (arg: string | IMessageOptions): IMessageHandle => {
    if (typeof arg === 'string') {
      arg = {
        message: arg
      };
    }
    arg.type = type;
    return Message(arg);
  };
});

// MessageBox
interface MessageBoxInputData {
  value: string;
  action: 'confirm' | 'cancel' | 'close';
}

const msgbox = MessageBox;
const alert = msgbox.alert;
const confirm = msgbox.confirm;
const prompt = msgbox.prompt;

// Notification
const notify = Notify;

// export
const _default = {
  message: message,
  msgbox: msgbox,
  alert: alert,
  confirm: confirm,
  prompt: prompt,
  notify: notify
};

export default _default;
export {
  message as epMessage,
  msgbox as epMessageBox,
  msgbox as epMsgBox,
  alert as epAlert,
  confirm as epConfirm,
  prompt as epPrompt,
  notify as epNotify,
  MessageBoxInputData
};
