import { ThemeProvider } from 'styled-components';
import { Container } from './style';

export default function ChatItemCard(props) {
  const { sender } = props;
  const theme = {
    textChat: {
      float: sender === 'user' ? 'left' : 'right',
      background:
        sender === 'user'
          ? 'linear-gradient(to left,rgb(37, 153, 189),rgb(40, 195, 251))'
          : '#ffffff',
      color: sender === 'user' ? '#ffffff' : '#212121',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Container {...props}>{props.children}</Container>
    </ThemeProvider>
  );
}
