import './Carousel.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <Splide
      aria-label="Fotogalerie"
      options={{
        type: 'slide',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true,
        autoHeight: true,
        breakpoints: {
          1000: {
            perPage: 2,
          },
          740: {
            perPage: 1,
          },
        },
      }}
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <div className="carousel__slide">
            <img src={image} alt={`Foto ${index + 1}`} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};
