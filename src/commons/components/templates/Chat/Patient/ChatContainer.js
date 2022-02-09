import { Container, Grid } from '@mui/material';
import { PatientChatStore } from '../../../../services/Contexts/PatientChatStore.context';
import { PatientChatMainer } from './style';
import { ChatHeader, Loading } from '../../../molecules';
import { PatientAnswerBox, PatientChatContent } from '../../../organisms';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';
import { useGetChatData, useSendMessage } from '../../../../apis/chat.api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNotifyManager } from '../../../../hooks/Toastify';
import { BASE_URL } from '../../../../constants/Types';
export default function ChatContainer() {
  const token = jsCookie.get('loginToken');
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetChatData(id);
  const [file, setFile] = useState(null);
  const { notifySuccess, notifyError } = useNotifyManager();
  const {
    mutate,
    isLoading: sendLoding,
    isError,
    isSuccess,
  } = useSendMessage();

  useEffect(() => {
    refetch();
  }, [isSuccess, isError]);
  const [fileUpRes, setFileUpRes] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  function selectedFile() {
    if (file) {
      const data = new FormData();
      data.append('file', file);
      setUploadLoading(true);
      axios({
        method: 'POST',
        url: BASE_URL + `storage/upload`,
        data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setUploadLoading(false);
          let img = res?.data?.data?.file;
          setFileUpRes(img);
          let type = res?.data?.data?.file?.mime?.split('/')?.[0];
          let dataOut = {
            order_id: id,
            file_id: res?.data?.data?.file?.id,
            message: '',
            type: type,
          };
          mutate({ data: dataOut });

          notifySuccess('با موفقیت آپلود شد');
        })
        .catch((e) => {
          setUploadLoading(false);
          notifyError('خطایی رخ داده است');
        });
    }
  }

  useEffect(() => {
    selectedFile();
  }, [file]);

  if (token) {
  } else {
    window.open('/dashboard', '_self');
    return;
  }

  return (
    <PatientChatStore>
      <Container maxWidth="md" style={{ marginBottom: '40px' }}>
        <br />
        <Grid item xs="12" style={{ marginBottom: '40px' }}>
          {isLoading || !data ? (
            <Loading />
          ) : (
            <PatientChatMainer>
              <ChatHeader {...data} />
              <PatientChatContent {...data} />
              <PatientAnswerBox
                fileUpRes={fileUpRes}
                file={file}
                orderId={id}
                refetch={refetch}
                sendLoding={sendLoding}
                loading={uploadLoading}
                selectedFile={setFile}
                {...data}
              />
            </PatientChatMainer>
          )}

          <br />
        </Grid>
        <br />
      </Container>
    </PatientChatStore>
  );
}
