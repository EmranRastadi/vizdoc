import { toast } from 'react-toastify';
import React from 'react';

const useNotifyManager = () => {
  toast.dismiss();
  toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
    toastId: 1,
  });
  const Msg = ({ text }) => (
    <span
      width={'100%'}
      fontSize={'12px'}
      textAlign={'right'}
      color={'#212121'}
    >
      {text}
    </span>
  );
  const notifyError = (msg, id) =>
    toast.error(<Msg text={msg} />, { id: id ? id : -1 });
  const notifySuccess = (msg, id) =>
    toast.success(<Msg text={msg} />, { id: id ? id : 1 });

  return { notifyError, notifySuccess };
};

export { useNotifyManager };
