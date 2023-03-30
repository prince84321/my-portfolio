import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Sumit Ranjan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel magnam facilis aspernatur molestiae odio porro? Quae, aliquam!Laboriosam, rerum. Ipsum saepe qui aut et corporis, voluptatibus quis vero nihil iure? Laborum, atque!",
  },
  {
    avatar: AVTR2,
    name: "Rakhi Thakur",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel magnam facilis aspernatur molestiae odio porro? Quae, aliquam!Laboriosam, rerum. Ipsum saepe qui aut et corporis, voluptatibus quis vero nihil iure? Laborum, atque!",
  },
  {
    avatar: AVTR3,
    name: "Abhishek Anand",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel magnam facilis aspernatur molestiae odio porro? Quae, aliquam!Laboriosam, rerum. Ipsum saepe qui aut et corporis, voluptatibus quis vero nihil iure? Laborum, atque!",
  },
  {
    avatar: AVTR4,
    name: "Neelesh Ranjan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel magnam facilis aspernatur molestiae odio porro? Quae, aliquam!Laboriosam, rerum. Ipsum saepe qui aut et corporis, voluptatibus quis vero nihil iure? Laborum, atque!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar-1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
