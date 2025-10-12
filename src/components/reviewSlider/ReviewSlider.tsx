import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // ensure autoplay styles are included
import "./ReviewSlider.scss";

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
  position: string;
  avatar?: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "David Kim",
    position: "CEO, New Jersey, USA",
    review:
      "Sahil Infotech has boosted our productivity and expanded our development capabilities. Their consistently high-quality work has truly impressed us.",
    rating: 5,
    avatar: "/media/customer1.jpg",
  },
  {
    id: 2,
    name: "Olivia Martinez",
     position: "CTO, New Jersey, USA",
    review:
      "Sahil are very gentle and professional workers. They deliver above the expectation and don't have a problem to listen to your ideas.",
    rating: 5,
    avatar: "/media/customer2.jpg",
  },
  {
    id: 3,
    name: "Richard Wright",
     position: "Project Manager at BearIT Srl, Pescara",
    review:
      "Working with Deepak was great! Despite some backend issues on our side, he remained patient and collaborated effectively to complete the app.",
    rating: 5,
    avatar: "/media/customer3.jpg",
  },
  {
    id: 4,
    name: "John Carter",
    position: "CTO at Tech Genius Inc, USA",
    review:
      "It is always a pleasure working with Sahil Infotech. They are a responsive, skilled, and reliable team!!",
    rating: 5,
    avatar: "/media/customer3.jpg",
  },
  {
    id: 5,
    name: "Kevin Wong",
    position: "Director at Dynamo Info Technologies LLC, USA",
    review:
      "It was a wonderful experience working with Sahil Infotech. The team is dedicated, honest, and highly skilled. I would be glad to collaborate with them again in the future",
    rating: 5,
    avatar: "/media/customer3.jpg",
  },
  {
    id: 6,
    name: "Christopher Young",
    position: "CTO at Dev Grid, US",
    review:
      "Sahil Infotech exceeded our expectations with their professionalism and technical expertise. Their team is reliable, transparent, and truly committed to delivering quality work. I look forward to partnering with them again.",
    rating: 5,
    avatar: "/media/customer3.jpg",
  },
];

const renderStars = (rating: number) => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

const ReviewSlider = () => {
  return (
    <div className="review-slider">
      <h3 className="heading3">What Our Client's Say</h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="review-card">
              {/* {item.avatar && (
                <img src={item.avatar} alt={item.name} className="avatar" />
              )} */}
              <p className="review-text">“{item.review}”</p>
              {renderStars(item.rating)}
              <h4 className="review-name">{item.name}</h4>
              <h5 className="review-postion">{item.position}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
