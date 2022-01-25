import { Tag } from '..';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Container, Next, ImageSwipperItem } from './style';
export default function ImageSwipper(props) {
  const { chipData, onClickChip } = props;

  const params = {
    slidesPerView: 'auto',
    // centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <Container>
      {/* <Prev className="swiper-button-preves"><AiOutlineRight /></Prev> */}
      <Swiper {...params} style={{ flex: 1 }} {...props}>
        {chipData.length
          ? chipData.map((item, index) => {
              return (
                <SwiperSlide autoWith={true} style={{ width: 'fit-content' }}>
                  <ImageSwipperItem
                    style={{ cursor: 'pointer' }}
                    key={index}
                    src={URL.createObjectURL(item)}
                    onClick={onClickChip}
                  />
                </SwiperSlide>
              );
            })
          : ''}
      </Swiper>

      <Next className="swiper-button-nextes">{/* <AiOutlineLeft /> */}</Next>
    </Container>
  );
}
