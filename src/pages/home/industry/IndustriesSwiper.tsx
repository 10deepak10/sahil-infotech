import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./IndustriesSwiper.scss";
import { Pagination, Autoplay } from "swiper/modules";

const IndustriesSwiper = () => {
  const slides = [
    { img: "/media/images/logistic.png", title: "Logistic" },
    { img: "/media/images/hotelbooking.png", title: "Hotel Booking" },
    { img: "/media/images/education.png", title: "Education" },
    { img: "/media/images/healthcare.png", title: "Healthcare" },
    { img: "/media/images/ecommerce.png", title: "E-Commerce" },
    { img: "/media/images/travel.png", title: "Travel" },
    { img: "/media/images/realestate.png", title: "Real Estate" },
    { img: "/media/images/manufacturing.png", title: "Manufacturing" },
  ];

  return (
    <section className="industries-swiper section">
      <div className="section-title px-6 md:px-10" data-aos="fade-up">
        <h2>Industries We Serve</h2>
        <p>Explore the industries we cater to with tailored solutions.</p>
      </div>
      <div className="swiper-container" data-aos="fade-up" data-aos-delay="50">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-item">
                <img src={slide.img} alt={slide.title} />
                <h3>{slide.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IndustriesSwiper;
