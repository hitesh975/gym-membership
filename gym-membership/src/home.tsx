/*
    ################## PLAN ##################

    WHY CHOOSE US

        🏋️ Modern Equipment
        🧑‍🏫 Certified Trainers
        🕒 Open 24/7
        🥗 Nutrition Guidance

    PLANS

        Basic
        ₹999/month

        Standard
        ₹1499/month

        Premium
        ₹2499/month

    FACILITIES

        Grid of images.

        Weight room
        Cardio
        CrossFit
        Yoga
        Swimming Pool
        Locker Rooms

    TRAINERS

        Photos of trainers.

        John
        Strength Coach

        Sarah
        Yoga Instructor

        Mike
        Nutrition Coach

    Testimonials

        ★★★★★

        "Lost 15kg in six months."

        -David
*/

import "./home.css";
import Card1 from "./components/card1/card1.tsx";
import backgroundImage from "./assets/gym.jfif";
import dumbbellIcon from "./assets/Dumbbell.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card2 from "./components/card2/card2.tsx";

export default function Home() {
  return (
    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="homeTitle">Make Your Dream Body</h1>
      <section className="heroSection">
        <h2 className="heroContent">Train smarter. Get stronger.</h2>
        <h2 className="heroContent">Memberships starting at ₹999/month.</h2>
      </section>
      <section className="WhyUs">
        <Swiper
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={20}
          className="WhyUsSlides"
        >
          <SwiperSlide>
            <Card1
              img={dumbbellIcon}
              title="Modern Equipment"
              description="State-of-the-art facilities to enhance your workout experience."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card1
              img={dumbbellIcon}
              title="Certified Trainers"
              description="Expert trainers to guide you on your fitness journey."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card1
              img={dumbbellIcon}
              title="Open 24/7"
              description="Flexible hours to fit your busy schedule."
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="Plans">
        <Swiper
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={20}
          className="PlansSlides"
        >
          <SwiperSlide>
            <Card2
              title="Basic"
              price="₹999/month"
              points={[
                "Access to all gym equipment",
                "1 free personal training session per month",
                "Locker room access",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card2
              title="Premium"
              price="₹1999/month"
              points={[
                "Access to all gym equipment",
                "3 free personal training sessions per month",
                "Locker room access",
                "Sauna and steam room access",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card2
              title="Elite"
              price="₹2999/month"
              points={[
                "Access to all gym equipment",
                "5 free personal training sessions per month",
                "Locker room access",
                "Sauna and steam room access",
                "Nutrition consultation",
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="Trainers"></section>
    </div>
  );
}
