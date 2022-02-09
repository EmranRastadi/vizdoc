import axios from 'axios';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import jsCookie from 'js-cookie';
import { BASE_URL } from '../constants/Types';
import { useDispatch } from 'react-redux';
import { useNotifyManager } from '../hooks/Toastify';
import { InforMationContext } from '../services/Contexts/InformationStore.context';
import { useHistory } from 'react-router-dom';
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
  const { state } = useContext(InforMationContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const { mutate: orderMutate } = useSaveOrderData();
  const [loading, setLoading] = useState(false);
  const [finishCode, setFinishCode] = useState(false);
  const { notifyError, notifySuccess } = useNotifyManager();
  const [data, setData] = useState('');
  const { ...qryParams } = useMutation((data) => {
    setLoading(true);
    const { type } = data;
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
        setLoading(true);
        notifySuccess('کد تایید شد!');
        jsCookie.set('userId', `${res?.data?.data?.user?.id}`);
        setFinishCode(true);
        if (type && type === 'justLogin') {
          jsCookie.set('loginToken', `${res?.data?.data?.token}`);
          window.open('/dashboard', '_self');
        } else {
          orderMutate({
            token: res?.data?.data?.token,
            service_id: 1,
            age: state.information.age,
            gender: state.information.gender
              ? state.information.gender
              : 'male',
            why: state.information.why ? state.information.why : '',
            pregnant: state.information.pregnant
              ? parseInt(state.information.pregnant)
              : 0,
            history: state.information.history ? state.information.history : '',
            is_emergency: state.information.emergency === true ? 1 : 0,
            is_specialist: state.information.specialist === true ? 1 : 0,
            file_ids: state.uploadedId,
          });
        }

        setData(res);
      })
      .catch((e) => {
        setLoading(false);
        setFinishCode(false);
        notifyError('خطایی رخ داده است.');
      });
  });
  return { ...qryParams, data, loading, finishCode };
};

const useSaveOrderData = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [finishCode, setFinishCode] = useState(false);
  const { notifyError, notifySuccess } = useNotifyManager();
  const { ...qryParams } = useMutation((data) => {
    dispatch({
      type: 'SET_TOKEN',
      payload: `${data.token}`,
    });
    jsCookie.set('loginToken', `${data.token}`);

    setLoading(true);
    axios({
      method: 'POST',
      url: BASE_URL + 'order',
      headers: {
        Authorization: `Bearer ${data.token}`,
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((res) => {
        setLoading(true);
        notifySuccess('اطلاعات شما با موفقیت ثبت شد!');
        setTimeout(() => {
          window.open(res?.data?.data?.payment?.start_url, '_self');
        }, 500);
      })
      .catch((e) => {
        setLoading(false);
        setFinishCode(false);
        notifyError('خطایی رخ داده است.');
      });
  });
  return { ...qryParams, loading };
};

export { useSendMobileNumber, useSendVerifyCode, useSaveOrderData };
