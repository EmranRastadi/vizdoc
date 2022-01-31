import axios from 'axios';
import jsCookie from 'js-cookie';
import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/Types';
const useGetOrder = (params) => {
  const token = jsCookie.get('loginToken');

  const { ...qryParams } = useQuery(['order', params], () => {
    return axios({
      method: 'GET',
      url: BASE_URL + `order/?` + params,
      headers: {
        Authorization: token,
      },
      // params,
    });
  });
  return { ...qryParams };
};

export { useGetOrder };
