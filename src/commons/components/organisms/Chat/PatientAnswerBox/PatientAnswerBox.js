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
  const [file, setFile] = useState(null);
  const [answerMsg, setAnswerMsg] = useState('');
  const { notifyError, notifySuccess } = useNotifyManager();
  const { mutate, isLoading, isError, isSuccess } = useSendMessage();

  // function _renderFile(typeIn) {
  //   if (typeIn === 'image') {
  //     let src = URL.createObjectURL(file);
  //     return (
  //       <ContainerCo>
  //         <Img src={src} />
  //         <Label style={{ flex: 1, fontSize: '13px' }}>یک تصویر پیوست شد</Label>
  //         <AiOutlineClose style={{ cursor: 'pointer' }} />
  //       </ContainerCo>
  //     );
  //   } else if (type === 'audio') {
  //     return (
  //       <ContainerCo>
  //         <Label style={{ fontSize: '13px' }}>یک فایل صوتی پیوست شد</Label>
  //       </ContainerCo>
  //     );
  //   } else if (type === 'video') {
  //     return (
  //       <ContainerCo>
  //         <Label style={{ fontSize: '13px' }}>یک ویدیو پیوست شد</Label>
  //       </ContainerCo>
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  useEffect(() => {
    if (isSuccess) {
      setAnswerMsg('');
      props.refetch();
    }
  }, [isSuccess]);

  function sendMsg() {
    let type;
    let dataOut = {
      order_id: props.orderId,
      file_id: props.fileUpRes?.id,
      message: answerMsg,
      type: type,
    };
    mutate({ data: dataOut });
    // console.log(props.fileUpRes?.id, answerMsg);
  }

  return (
    <Grid item xs={12}>
      <Container>
        <Main>
          {/* {props.fileUpRes ? (
            <PreAttachment>{type && _renderFile(type)}</PreAttachment>
          ) : null} */}
          {/* <ReactPlayer /> */}

          {props?.data?.data?.can_send_message ? (
            <>
              {props.loading || props.sendLoding ? (
                <MainProg>
                  <CircularProgress />
                </MainProg>
              ) : (
                <>
                  <AttachButton onClick={() => setRecorder(true)}>
                    <MdKeyboardVoice />
                  </AttachButton>
                  <AttachButton style={{ fontSize: '19px', lineHeight: '3' }}>
                    <input
                      type="file"
                      accept="image/* , video/*,audio/*"
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
                onChange={(e) => setAnswerMsg(e.target.value)}
                placeholder={'شما میتوانید از دکتر خود سوال بپرسید ...'}
              />
              {isLoading || props.sendLoding ? (
                <LoadingButton>
                  <CircularProgress />
                </LoadingButton>
              ) : (
                <CheckBoxButton
                  style={{ width: '120px' }}
                  onlyBtn={true}
                  onClick={sendMsg}
                  className="active"
                  title={'ارسال سوال'}
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
