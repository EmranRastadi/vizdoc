import axios from 'axios';
import jsCookie from 'js-cookie';
import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/Types';
const useGetOrder = (params) => {
  const first_token = jsCookie.get('loginToken');
  let pattern = /^(.*?(\bBearer\s\b)[^$]*)$/;
  let token_check = pattern.test(first_token);
  let token;
  if (token_check) {
    token = token_check;
  } else {
    token = `Bearer ` + first_token;
  }

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
