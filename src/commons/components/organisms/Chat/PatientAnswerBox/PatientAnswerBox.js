import { Grid } from '@mui/material';
import { TxtInput } from '../../../atoms';
import { CheckBoxButton } from '../../../molecules';
import { Container, Main, AttachButton } from './style';
import { MdKeyboardVoice } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
export default function PatientAnswerBox() {
  function selectedFile(e) {}
  return (
    <Grid item xs={12}>
      <Container>
        <Main>
          <AttachButton>
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
      </Container>
    </Grid>
  );
}
