import { ThemeProvider } from 'styled-components';
import { Container, ProgressStep } from './style';

export default function Progress(props) {
  const theme = {
    progress: {
      width: props.percentage ? props.percentage : '33%',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ProgressStep />
      </Container>
    </ThemeProvider>
  );
}
