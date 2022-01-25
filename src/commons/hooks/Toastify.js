import { toast } from 'react-toastify';
import React from 'react';

const useNotifyManager = () => {
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
  const notifyError = (msg) => toast.error(<Msg text={msg} />);
  const notifySuccess = (msg) => toast.success(<Msg text={msg} />);

  return { notifyError, notifySuccess };
};

export { useNotifyManager };
