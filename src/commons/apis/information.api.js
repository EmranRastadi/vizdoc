import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants/Types';
import { useContext, useState } from 'react';
import { InforMationContext } from '../services/Contexts/InformationStore.context';

const useGetLabels = (params) => {
  const [result, setResult] = useState();
  const { ...qryParams } = useQuery(['labels', params], (queryKey) => {
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
  });

  return { ...qryParams, result };
};

const useFetchServiceQuery = (params) => {
  const [result, setResult] = useState({});
  const { dispatch } = useContext(InforMationContext);
  const { ...qryParams } = useQuery(['service', params], () => {
    axios({
      method: 'GET',
      url: BASE_URL + `service/1`,
      params: params,
    }).then((res) => {
      dispatch({
        type: 'SERVICE_DATA',
        payload: res,
      });
      setResult(res);
    });
  });

  return { ...qryParams, result };
};

export { useGetLabels, useFetchServiceQuery };
