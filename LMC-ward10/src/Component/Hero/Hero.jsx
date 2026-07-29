import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import image1 from "../../assets/wardhouse.png";
import image2 from "../../assets/ear.jpg";
import image3 from "../../assets/roadsideimg.jpeg";


import './Hero.css'

function Hero() {
  return (
<Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  loop={false}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  speed={1200}
>
      <SwiperSlide>
        <img src={image1} alt="Ward" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={image2} alt="Ward" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={image3} alt="Ward" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;