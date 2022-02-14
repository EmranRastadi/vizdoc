import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL } from '../constants/Types';
import jsCookie from 'js-cookie';
import { useNotifyManager } from '../hooks/Toastify';
import { useState } from 'react';
const useGetChatData = (id) => {
  const token = jsCookie.get('loginToken');
  const { ...qryParams } = useQuery(
    ['chatData', id],
    ({ queryKey }) => {
      if (id) {
        return axios({
          method: 'GET',
          url: BASE_URL + 'order/' + queryKey[1],
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      }
    },
    {
      retry: true,
      refetchInterval: 30000,
    }
  );

  return { ...qryParams };
};

const useSendMessage = (id) => {
  const token = jsCookie.get('loginToken');
  const { notifyError, notifySuccess } = useNotifyManager();
  const { refetch } = useGetChatData(id);
  const [loading, setLoading] = useState(false);
  const { ...qryParams } = useMutation(({ data, id }) => {
    setLoading(true);
    return axios({
      method: 'POST',
      url: BASE_URL + 'message',
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((res) => {
        setLoading(false);
        notifySuccess('پیام شما ارسال شد');
        refetch();
      })
      .catch((err) => {
        setLoading(false);
        notifyError('خطایی رخ داده است');
      });
  });
  return { ...qryParams, loading };
};

export { useGetChatData, useSendMessage };
