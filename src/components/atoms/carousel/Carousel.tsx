// import Slider from 'react-slick';
import './Carousel.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { ChevronLeftIcon } from '@heroicons/react/20/solid';
// import { ChevronRightIcon } from '@heroicons/react/20/solid';

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

// export const Carousel = ({ images }: CarouselProps) => {
//   const settings = {
//     mobileFirst: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     centerMode: false,
//     centerPadding: '0px',
//     nextArrow: <ChevronRightIcon fill="#554239" />,
//     prevArrow: <ChevronLeftIcon fill="#554239" />,
//     responsive: [
//       {
//         breakpoint: 1406,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 740,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-wrapper">
//       <Slider {...settings}>
//         {images.map((src, i) => (
//           <div key={i} className="carousel-slide">
//             <img src={src} alt={`Gallery ${i + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
