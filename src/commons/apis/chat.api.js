import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL } from '../constants/Types';
import jsCookie from 'js-cookie';
import { useNotifyManager } from '../hooks/Toastify';
const useGetChatData = (id) => {
  const token = jsCookie.get('loginToken');
  const { ...qryParams } = useQuery(
    ['chatData', id],
    ({ queryKey }) => {
      return axios({
        method: 'GET',
        url: BASE_URL + 'order/' + queryKey[1],
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
    {
      retry: true,
      refetchInterval: 30000,
    }
  );

  return { ...qryParams };
};

const useSendMessage = () => {
  const token = jsCookie.get('loginToken');
  const { notifyError, notifySuccess } = useNotifyManager();

  const { ...qryParams } = useMutation(({ data }) => {
    axios({
      method: 'POST',
      url: BASE_URL + 'message',
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((res) => {
        notifySuccess('پیام شما ارسال شد');
      })
      .catch((err) => {
        notifyError('خطایی رخ داده است');
      });
  });
  return { ...qryParams };
};

export { useGetChatData, useSendMessage };
