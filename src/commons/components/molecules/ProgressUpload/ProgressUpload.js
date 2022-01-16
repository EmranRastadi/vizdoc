import { ThemeProvider } from 'styled-components';
import { Container, ProgressUntil } from './style';

export default function ProgressUpload(props) {
  const theme = {
    progress: {
      width: props.width ? props.width : '30%',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ProgressUntil />
      </Container>
    </ThemeProvider>
  );
}
