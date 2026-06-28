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
import backgroundImage from "./assets/gym.jfif";
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
    </div>
  );
}
