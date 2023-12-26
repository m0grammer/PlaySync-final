import React, { useEffect } from 'react';
import Swiper from 'swiper';

import './Slide2.css';
import Slider1 from '../assets/img/slider1.png';
import SliderLine2 from '../assets/img/slider-line2.svg';
import Slider2 from '../assets/img/slider2.png';
import SliderLine from '../assets/img/slider-line.png';
import Slider3 from '../assets/img/slider3.png';
import Slider4 from '../assets/img/slider4.png';

const Slide2 = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    let swiper;

    function handleMediaChange(mediaQuery) {
      if (mediaQuery.matches) {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 60,
        });
      } else {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 4,
          spaceBetween: 60,
        });
      }
    }

    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);

    const slidersAll = document.querySelectorAll(".swiper-slide");
    const sliderBtnFuture = document.querySelector(
      ".tournaments__info-slider-filter-future"
    );
    const sliderBtnPast = document.querySelector(
      ".tournaments__info-slider-filter-past"
    );

    sliderBtnPast.addEventListener("click", () => {
      slidersAll.forEach((slider) => {
        if (slider.classList.contains("slideActive")) {
          slider.classList.remove("slideActive");
          slider.classList.add("slideBlocked");
        } else if (slider.classList.contains("slideBlocked")) {
          slider.classList.remove("slideBlocked");
          slider.classList.add("slideActive");
        }
      });

      sliderBtnFuture.removeAttribute("disabled", "disabled");
      sliderBtnPast.setAttribute("disabled", "disabled");
    });

    sliderBtnFuture.addEventListener("click", () => {
      slidersAll.forEach((slider) => {
        if (slider.classList.contains("slideActive")) {
          slider.classList.remove("slideActive");
          slider.classList.add("slideBlocked");
        } else if (slider.classList.contains("slideBlocked")) {
          slider.classList.remove("slideBlocked");
          slider.classList.add("slideActive");
        }
      });

      sliderBtnPast.removeAttribute("disabled", "disabled");
      sliderBtnFuture.setAttribute("disabled", "disabled");
    });
    

    return () => {
      // Cleanup the swiper instance and remove media query listener when the component is unmounted
      if (swiper) {
        swiper.destroy();
      }
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

    return( 
        <>
          <section class="tournaments">
            <div class="tournaments__info container">
                <div class="tournaments__info-text">
                    <h2>Organize with us</h2>
                    <h1>Tournaments</h1>
                </div>
                <div class="tournaments__info-slider">
                    <div class="tournaments__info-slider-filter">
                        <button
                            disabled
                            class="tournaments__info-slider-filter-future btnSliderActive btnSliderOff"
                        >
                            Future
                        </button>
                        <button
                            class="tournaments__info-slider-filter-past btnSliderBlocked"
                        >
                            Past
                        </button>
                    </div>
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slideActive">
                                <img src={Slider1} alt="" />
                                <div
                                    class="swiper-slide-text1 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text1-icon"></div>
                                    <div class="swiper-slide-text1-text">
                                        <h1>Etherial Resonance</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text1-price sliderPrice"
                                    >
                                        <h1>5 ETH</h1>
                                        <img
                                            src={SliderLine2}
                                            alt=""
                                        />
                                        <h2>20.06.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideActive">
                                <img src={Slider3} alt="" />
                                <div
                                    class="swiper-slide-text2 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text2-icon"></div>
                                    <div class="swiper-slide-text2-text">
                                        <h1>Neo Visions</h1>
                                        <h2>Germany</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text2-price sliderPrice"
                                    >
                                        <h1>15 ETH</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.08.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideActive">
                                <img src={Slider3} alt="" />
                                <div
                                    class="swiper-slide-text3 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text3-icon"></div>
                                    <div class="swiper-slide-text3-text">
                                        <h1>Bytcoin Melody</h1>
                                        <h2>France</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text3-price sliderPrice"
                                    >
                                        <h1>10 BTC</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.10.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideActive">
                                <img src={Slider4} alt="" />
                                <div
                                    class="swiper-slide-text4 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text4-icon"></div>
                                    <div class="swiper-slide-text4-text">
                                        <h1>Solana Rain</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text4-price sliderPrice"
                                    >
                                        <h1>1500 SOL</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.12.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideActive">
                                <img src={Slider4} alt="" />
                                <div
                                    class="swiper-slide-text4 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text4-icon"></div>
                                    <div class="swiper-slide-text4-text">
                                        <h1>Solana Rain</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text4-price sliderPrice"
                                    >
                                        <h1>1500 SOL</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.12.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideBlocked">
                                <img src={Slider3} alt="" />
                                <div
                                    class="swiper-slide-text3 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text3-icon"></div>
                                    <div class="swiper-slide-text3-text">
                                        <h1>Bytcoin Melody</h1>
                                        <h2>France</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text3-price sliderPrice"
                                    >
                                        <h1>10 BTC</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.10.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideBlocked">
                                <img src={Slider3} alt="" />
                                <div
                                    class="swiper-slide-text2 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text2-icon"></div>
                                    <div class="swiper-slide-text2-text">
                                        <h1>Neo Visions</h1>
                                        <h2>Germany</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text2-price sliderPrice"
                                    >
                                        <h1>15 ETH</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.08.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideBlocked">
                                <img src={Slider2} alt="" />
                                <div
                                    class="swiper-slide-text4 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text4-icon"></div>
                                    <div class="swiper-slide-text4-text">
                                        <h1>Solana Rain</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text4-price sliderPrice"
                                    >
                                        <h1>1500 SOL</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.12.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideBlocked">
                                <img src={Slider1} alt="" />
                                <div
                                    class="swiper-slide-text1 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text1-icon"></div>
                                    <div class="swiper-slide-text1-text">
                                        <h1>Etherial Resonance</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text1-price sliderPrice"
                                    >
                                        <h1>5 ETH</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.06.24</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide slideBlocked">
                                <img src={Slider1} alt="" />
                                <div
                                    class="swiper-slide-text1 swiper-slide-text"
                                >
                                    <div class="swiper-slide-text1-icon"></div>
                                    <div class="swiper-slide-text1-text">
                                        <h1>Etherial Resonance</h1>
                                        <h2>Russia</h2>
                                    </div>
                                    <div
                                        class="swiper-slide-text1-price sliderPrice"
                                    >
                                        <h1>5 ETH</h1>
                                        <img
                                            src={SliderLine}
                                            alt=""
                                        />
                                        <h2>20.06.24</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tournaments__info-btn">
                    <a href="#">See more</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Slide2;