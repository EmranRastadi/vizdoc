import { Container } from './style';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function BackButton(props) {
  return (
    <Container {...props}>
      <HiOutlineArrowNarrowRight />
    </Container>
  );
}
