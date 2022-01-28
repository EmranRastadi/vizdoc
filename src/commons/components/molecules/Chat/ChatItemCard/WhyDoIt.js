import { ChatCardDate, ChatItemCardContainer, Label } from '../../../atoms';
import Tag from '../../Tag/Tag';
import { TagContainer } from './style';

export default function WhyDoIt(props) {
  return (
    <ChatItemCardContainer {...props}>
      <Label style={{ fontSize: '13px', fontWeight: 'bold' }}>
        چرا آزمایش داده اید؟
      </Label>
      <TagContainer>
        <Tag style={{ margin: '5px 2px' }}>چکاپ</Tag>
      </TagContainer>

      <Label style={{ fontSize: '14px', color: '#6c6c6c' }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
      </Label>
      <br />

      <Label style={{ fontSize: '13px', fontWeight: 'bold' }}>
        چرا آزمایش داده اید؟
      </Label>

      <TagContainer>
        <Tag style={{ margin: '5px 2px' }}>چکاپ</Tag>
      </TagContainer>

      <Label style={{ fontSize: '14px', color: '#6c6c6c' }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
      </Label>
      <br />

      <ChatCardDate date={'1400/11/20'} time={'20:50'} status={true} />
    </ChatItemCardContainer>
  );
}
