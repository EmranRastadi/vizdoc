import { Container, Grid } from '@mui/material';
import { PatientChatStore } from '../../../../services/Contexts/PatientChatStore.context';
import { PatientChatMainer } from './style';
import { ChatHeader } from '../../../molecules';
import { PatientAnswerBox, PatientChatContent } from '../../../organisms';
export default function ChatContainer() {
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
