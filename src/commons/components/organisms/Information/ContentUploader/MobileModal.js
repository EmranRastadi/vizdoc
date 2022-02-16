import { CircularProgress, Grid, TextField } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { Modal, VeifyMobile, VerifyCode } from '../..';
import { useSelector } from 'react-redux';
import {
  useSendMobileNumber,
  useSaveOrderData,
  useSendVerifyCode,
} from '../../../../apis/auth.api';
import { Label } from '../../../atoms';
import { CheckBoxButton, Loading } from '../../../molecules';
import { useNotifyManager } from '../../../../hooks/Toastify';
import { InforMationContext } from '../../../../services/Contexts/InformationStore.context';

export default function MobileModal(props) {
  const { pay, setPay, type } = props;
  const { notifyError } = useNotifyManager();
  const [edit, setEdit] = useState(false);
  const [mobile, setMobile] = useState(null);
  const { state } = useContext(InforMationContext);
  const [code, setCode] = useState(null);
  const { mutate, loading, finish, isSuccess } = useSendMobileNumber();
  const {
    mutate: orderMutate,
    isLoading: orderLoading,
    finish: orderFinish,
  } = useSaveOrderData();
  const {
    mutate: codeMutate,
    loading: loadingCode,
    finishCode,
    data,
  } = useSendVerifyCode();
  // const state = useSelector((state) => state);
  function submitFormVerifyMobile() {
    if (mobile) {
      mutate({ mobile });
    } else {
      notifyError('شماره تلفنتان را وارد کنید');
    }
  }

  function submitFormVerifyCode() {
    if (code) {
      codeMutate({ code, mobile, type });
    } else {
      notifyError('شماره کد را وارد کنید');
    }
  }

  useEffect(() => {
    setEdit(false);
  }, [isSuccess]);

  return (
    <Modal
      status={pay}
      setStatus={setPay}
      title={finish === true && edit === false ? 'تایید شماره تلفن همراه' : 'ورود به ویزداک'}
    >
      {finish === true && edit === false ? (
        <VerifyCode
          loadingCode={loadingCode}
          setCode={setCode}
          setEdit={setEdit}
          mobile={mobile}
          type={type}
          submitFormVerifyCode={submitFormVerifyCode}
        />
      ) : (
        <VeifyMobile
          loading={loading}
          setMobile={setMobile}
          submitFormVerifyMobile={submitFormVerifyMobile}
        />
      )}
    </Modal>
  );
}
