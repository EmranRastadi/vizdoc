import { Button, CircularProgress, Container } from '@mui/material';
import {
  WhyDoIt,
  ImagePreDownload,
  DoctorDetail,
  AudioPlayer,
} from '../../../molecules';
import { ActionButtonMain, MiniProg } from './style';
import { Redirect, useHistory } from 'react-router-dom';
import { useNotifyManager } from '../../../../hooks/Toastify';
import { useState } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
import FileMsg from '../../../molecules/FileMsg/FileMsg';
export default function PatientChatContent(props) {
  let chats = props?.data?.data?.messages ?? [];
  const [loadingReq, setLoadingReq] = useState(false);
  const { notifySuccess, notifyError } = useNotifyManager();
  const token = jsCookie.get('loginToken');
  const userId = jsCookie.get('userId');
  const history = useHistory();
  function onClickActionButton(e, type, link) {
    e.preventDefault();
    if (type === 'request') {
      setLoadingReq(true);
      // window.open(link, '_self');
      axios({
        method: 'GET',
        url: link,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setLoadingReq(false);
          notifySuccess('درخواست شما برای پزشک دیگری ارسال شد');
          history.push('/dashboard');
        })
        .catch((e) => {
          setLoadingReq(false);
          notifyError('خطایی رخ داده است');
        });
    } else {
      window.open(link, '_blank');
    }
  }

  return (
    <Container style={{ padding: '15px', float: 'right' }}>
      {chats.map((item, index) => {
        switch (item.type) {
          case 'normal':
            return (
              <div key={index} style={{ float: 'right', width: '100%' }}>
                <WhyDoIt type="you" {...item} />
              </div>
            );
          case 'image':
            return (
              <div key={index} style={{ float: 'right', width: '100%' }}>
                <ImagePreDownload content={item} />
              </div>
            );
          case 'user_info':
            return (
              <div key={index} style={{ float: 'right', width: '100%' }}>
                <DoctorDetail content={item} />
              </div>
            );
          case 'voice':
            return (
              <div key={index} style={{ float: 'right', width: '100%' }}>
                <AudioPlayer content={item} />
              </div>
            );
          case 'file':
            return (
              <div key={index} style={{ float: 'right', width: '100%' }}>
                <FileMsg content={item} />
              </div>
            );
          default:
            return '';
        }
      })}

      <div style={{ float: 'right', width: '100%' }}>
        <ActionButtonMain>
          {props?.data?.data?.action_buttons.length &&
            props?.data?.data?.action_buttons.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={(e) =>
                    onClickActionButton(e, item.type, item.link ?? item.action)
                  }
                  style={{
                    width: '130px',
                    height: '35px',
                    fontSize: '11px',
                    fontFamily: 'yekan',
                    background:
                      'linear-gradient(to left,rgb(37,153,189),rgb(40,195,251))',
                  }}
                  variant="contained"
                >
                  {item.type === 'request' && loadingReq === true ? (
                    <MiniProg>
                      <CircularProgress
                        style={{ width: '25px', height: '25px' }}
                      />
                    </MiniProg>
                  ) : (
                    item.title
                  )}
                </Button>
              );
            })}
        </ActionButtonMain>
      </div>
    </Container>
  );
}
