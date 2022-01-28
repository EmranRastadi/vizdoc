import { BackDownload, Container, ImageLoader } from './style';
import { ChatCardDate, ChatItemCardContainer, Label } from '../../atoms';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
export default function ImagePreDownload(props) {
  const { src, type } = props;
  return (
    <ChatItemCardContainer
      style={{ width: '250px' }}
      className={type === 'you' ? '' : 'active'}
    >
      <Container>
        <ImageLoader>
          <img src={src} />
          <BackDownload>
            <MdOutlineDownloadForOffline />
          </BackDownload>
        </ImageLoader>

        <div
          style={{
            float: 'right',
          }}
        >
          <Label
            style={{
              fontSize: '14px',
              marginTop: 15,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            عکس سی تی اسکن 2017
          </Label>
          <Label
            style={{
              fontSize: '11px',
              fontWeight: '100',
              color: 'rgb(157 157 157)',
            }}
          >
            1 مگابایت
          </Label>
          <ChatCardDate date={'1400/11/20'} time={'20:50'} status={true} />
        </div>
      </Container>
    </ChatItemCardContainer>
  );
}
