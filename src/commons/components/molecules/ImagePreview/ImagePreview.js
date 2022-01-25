import { Image, ImageContainer, Closer } from './style';
import { AiOutlineClose } from 'react-icons/ai';
export default function ImagePreview(props) {
  const { onClose } = props;
  return (
    <ImageContainer onClick={(e) => onClose(e)}>
      <Closer onClick={(e) => onClose(e)}>
        <AiOutlineClose />
      </Closer>
      <Image src={props.src} />
    </ImageContainer>
  );
}
