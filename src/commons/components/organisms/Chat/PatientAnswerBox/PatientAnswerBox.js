import { Grid } from '@mui/material';
import { ReactPlayer, TxtInput } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { Container, Main, AttachButton } from './style';
import { MdKeyboardVoice } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import { VoiceRecorder } from '../..';
import { useState } from 'react';
export default function PatientAnswerBox() {
  function selectedFile(e) {}
  const [recorder, setRecorder] = useState(false);
  return (
    <Grid item xs={12}>
      <Container>
        <Main>
          {/* <ReactPlayer /> */}

          <AttachButton onClick={() => setRecorder(true)}>
            <MdKeyboardVoice />
          </AttachButton>
          <AttachButton style={{ fontSize: '19px', lineHeight: '3' }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => selectedFile(e)}
            />
            <GrAttachment />
          </AttachButton>
          <TxtInput placeholder={'شما میتوانید از دکتر خود سوال بپرسید ...'} />

          <CheckBoxButton
            style={{ width: '120px' }}
            // onClick={(event) => gotToNextLevel(event)}
            onlyBtn={true}
            className="active"
            title={'ارسال سوال'}
          />
        </Main>

        <VoiceRecorder recorder={recorder} setRecorder={setRecorder} />
      </Container>
    </Grid>
  );
}
