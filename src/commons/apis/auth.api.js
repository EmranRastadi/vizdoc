import axios from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { BASE_URL } from '../constants/Types';
import { useNotifyManager } from '../hooks/Toastify';
const useSendMobileNumber = () => {
  const [loading, setLoading] = useState(false);
  const { notifyError, notifySuccess } = useNotifyManager();
  const [finish, setFinish] = useState(false);
  const { ...qryParams } = useMutation((data) => {
    setLoading(true);
    axios({
      method: 'POST',
      url: BASE_URL + 'otp/sendCode',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((res) => {
        setFinish(true);
        setLoading(false);
        notifySuccess('کد تایید برای شما ارسال شد!');
      })
      .catch((e) => {
        setLoading(false);
        notifyError('خطایی رخ داده است.');
      });
  });
  return { ...qryParams, finish, loading };
};

const useSendVerifyCode = () => {
  const [loading, setLoading] = useState(false);
  const { notifyError, notifySuccess } = useNotifyManager();
  const { ...qryParams } = useMutation((data) => {
    setLoading(true);
    axios({
      method: 'POST',
      url: BASE_URL + 'otp/verifyCode',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((res) => {
        setLoading(false);
        notifySuccess('کد تایید شد!');
      })
      .catch((e) => {
        setLoading(false);
        notifyError('خطایی رخ داده است.');
      });
  });
  return { ...qryParams, loading };
};

export { useSendMobileNumber, useSendVerifyCode };
