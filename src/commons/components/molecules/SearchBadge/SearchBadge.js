import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, CloseBadge } from './style';

export default function SearchBadge() {
  const [active, setActive] = useState(false);
  return (
    <Container className={active ? 'active' : ''}>
      {active ? (
        <CloseBadge onClick={() => setActive(false)}>
          <AiOutlineClose />
        </CloseBadge>
      ) : (
        ''
      )}
      <span onClick={() => setActive(true)}>hi emran</span>
    </Container>
  );
}
