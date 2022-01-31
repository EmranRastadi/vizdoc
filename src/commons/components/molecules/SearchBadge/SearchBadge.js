import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, CloseBadge } from './style';

export default function SearchBadge({ name, title, onClick }) {
  const [active, setActive] = useState(false);
  return (
    <Container className={active ? 'active' : ''}>
      {active ? (
        <CloseBadge
          onClick={() => {
            setActive(false);
            onClick(name, false);
          }}
        >
          <AiOutlineClose />
        </CloseBadge>
      ) : (
        ''
      )}
      <span
        onClick={() => {
          setActive(true);
          onClick(name, true);
        }}
      >
        {title}
      </span>
    </Container>
  );
}
