import Slider from 'react-slick';
import './Carousel.scss';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const settings = {
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: '0px',
    nextArrow: <ChevronRightIcon fill="#554239" />,
    prevArrow: <ChevronLeftIcon fill="#554239" />,
    responsive: [
      {
        breakpoint: 1406,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="carousel-slide">
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
