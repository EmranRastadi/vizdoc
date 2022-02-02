import { Container, Grid } from '@mui/material';
import { PatientChatStore } from '../../../../services/Contexts/PatientChatStore.context';
import { PatientChatMainer } from './style';
import { ChatHeader } from '../../../molecules';
import { PatientAnswerBox, PatientChatContent } from '../../../organisms';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';
export default function ChatContainer() {
  const token = jsCookie.get('loginToken');
  const { id } = useParams();
  if (token) {
  } else {
    window.open('/information', '_self');
    return;
  }

  return (
    <PatientChatStore>
      <Container maxWidth="md" style={{ marginBottom: '40px' }}>
        <br />
        <Grid item xs="12" style={{ marginBottom: '40px' }}>
          <PatientChatMainer>
            <ChatHeader />
            <PatientChatContent />

            <PatientAnswerBox />
          </PatientChatMainer>
          <br />
        </Grid>
        <br />
      </Container>
    </PatientChatStore>
  );
}
