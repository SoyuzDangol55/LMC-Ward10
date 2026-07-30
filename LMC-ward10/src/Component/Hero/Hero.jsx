import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import image1 from "../../assets/wardhouse.png";
import image2 from "../../assets/ear.jpg";
import image3 from "../../assets/roadsideimg.jpeg";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">

      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={image1} alt="Ward 10" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image2} alt="Ward 10" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image3} alt="Ward 10" />
        </SwiperSlide>
      </Swiper>

      <div className="overlay"></div>

      <div className="hero-text">
        <h1>ललितपुर महानगरपालिका - वडा नं. १०</h1>

        <h2>Lalitpur Metropolitan City - Ward No. 10</h2>

        <p>
          सेवा, पारदर्शिता र समृद्धि
        </p>

        <p>
          Service, Transparency and Prosperity
        </p>

        <button>Learn More</button>
      </div>

    </div>
  );
}

export default Hero;