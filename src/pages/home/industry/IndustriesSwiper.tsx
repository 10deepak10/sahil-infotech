import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./IndustriesSwiper.scss";
import { Autoplay } from "swiper/modules";

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
      <div className="section-title" data-aos="fade-up">
        <h2 className="heading3">Industries We Serve</h2>
        <p className="text">Explore the industries we cater to with tailored solutions.</p>
      </div>
      <div className="swiper-container" data-aos="fade-up" data-aos-delay="50">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            // For mobile screens (max-width: 640px)
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // For tablets (max-width: 768px)
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            // For larger screens
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
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
