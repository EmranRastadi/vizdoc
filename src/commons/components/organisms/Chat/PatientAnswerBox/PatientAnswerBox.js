import { CircularProgress, Grid } from '@mui/material';
import { ReactPlayer, TxtInput, Label } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import {
  Container,
  Main,
  AttachButton,
  MainNotAccess,
  PreAttachment,
  ContainerCo,
  Img,
  MainProg,
  LoadingButton,
} from './style';
import { MdKeyboardVoice } from 'react-icons/md';
import { useNotifyManager } from '../../../../hooks/Toastify';
import { AiOutlineClose } from 'react-icons/ai';
import { GrAttachment } from 'react-icons/gr';
import { VoiceRecorder } from '../..';
import { useEffect, useState } from 'react';
import { useSendMessage } from '../../../../apis/chat.api';
export default function PatientAnswerBox(props) {
  const [recorder, setRecorder] = useState(false);
  const { mutate, isLoading, isSuccess } = useSendMessage();

  const [file, setFile] = useState(null);
  const [answerMsg, setAnswerMsg] = useState('');

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setAnswerMsg('');
      props.refetch();
    }
  }, [isSuccess, isLoading]);

  function sendMsg() {
    let type;
    let dataOut = {
      order_id: props.orderId,
      file_id: props.fileUpRes?.id,
      message: answerMsg,
      type: type,
    };
    if (answerMsg !== '') {
      mutate({ data: dataOut });
    }
  }

  function checkEnterClick(e) {
    if (e.key === 'Enter') {
      sendMsg();
    }
  }

  return (
    <Grid item xs={12}>
      <Container>
        <Main>
          {props?.data?.data?.can_send_message ? (
            <>
              {props.loading || props.sendLoding ? (
                <MainProg>
                  <CircularProgress />
                </MainProg>
              ) : (
                <>
                {/*  <AttachButton onClick={() => setRecorder(true)}>
                    <MdKeyboardVoice />
                  </AttachButton>*/}
                  <AttachButton style={{ fontSize: '14px', lineHeight: '13' }}>
                    <input
                      type="file"
                      accept="image/* , video/*,audio/*,application/pdf"
                      onChange={(e) => {
                        props.selectedFile(e.target.files[0], 'image');
                        setFile(e.target.files[0]);
                      }}
                    />
                    <GrAttachment />
                  </AttachButton>
                </>
              )}

              <TxtInput
                value={answerMsg}
                onKeyDown={(e) => checkEnterClick(e)}
                onChange={(e) => setAnswerMsg(e.target.value)}
                placeholder={'پیام'}
              />
              {isLoading && !isSuccess ? (
                <LoadingButton>
                  <CircularProgress />
                </LoadingButton>
              ) : (
                <CheckBoxButton
                  onlyBtn={true}
                  onClick={sendMsg}
                  className="active"
                  style={{minHeight: 0,padding:0}}
                  title={'ارسال'}
                />
              )}
            </>
          ) : (
            <MainNotAccess>
              <Label
                style={{
                  fontSize: '14px',
                  fontWeight: '100',
                  color: '#858585',
                }}
              >
                {props?.data?.data?.can_send_message_error}
              </Label>
            </MainNotAccess>
          )}
        </Main>

        <VoiceRecorder
          selectedFile={(e) => {
            props.selectedFile(e);
            setFile(e);
          }}
          recorder={recorder}
          setRecorder={setRecorder}
        />
      </Container>
    </Grid>
  );
}
