import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants/Types';
import { useContext, useState } from 'react';
import { InforMationContext } from '../services/Contexts/InformationStore.context';
import { useNotifyManager } from '../hooks/Toastify';

const useGetLabels = (params) => {
  const [result, setResult] = useState();
  const { ...qryParams } = useQuery(
    ['labels', params],
    (queryKey) => {
      const urlMake = new URLSearchParams();
      if (params) {
        Object.entries(params).map(([key, value]) => {
          urlMake.append(key, value);
        });
      }
      axios({
        method: 'POST',
        url: BASE_URL + `service/word/suggestion/`,
        params: urlMake,
      }).then((res) => {
        setResult(res);
      });
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  return { ...qryParams, result };
};

const useFetchServiceQuery = (params) => {
  const [result, setResult] = useState({});
  const { dispatch } = useContext(InforMationContext);
  const { notifyError } = useNotifyManager();
  const { ...qryParams } = useQuery(
    ['service', params],
    () => {
      axios({
        method: 'GET',
        url: BASE_URL + `service/1`,
        params: params,
      })
        .then((res) => {
          dispatch({
            type: 'SERVICE_DATA',
            payload: res,
          });
          setResult(res);
        })
        .catch((err) => {
          notifyError('خطایی رخ داده است');
        });
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  return { ...qryParams, result };
};

export { useGetLabels, useFetchServiceQuery };
