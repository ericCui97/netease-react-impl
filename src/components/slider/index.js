
/**
 * 为什么useMemo可以解决？官方文档说过传入 useMemo 的函数会在渲染期间执行，所以使用useMemo就能解决之前的问题，怎么在DOM改变的时候，控制某些函数不被触发。
和useMemo相近的还有一个useCallback，只是后者返回一个函数useCallback(fn, deps) 相当于 useMemo(() => fn, deps)，这里我们返回一个memo函数，
 */

import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  const { bannerList } = props;

  useEffect (() => {
    if (bannerList.length && !sliderSwiper){
        let newSliderSwiper = new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {el:'.swiper-pagination'},
        });
        setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  
  return (
    <SliderContainer>
        <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map (slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  );
}

export default React.memo (Slider);