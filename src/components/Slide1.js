import './Slide1.css';

import RightHand from "../assets/img/right-png.png";
import MainLine from "../assets/img/main-line.png";
import React from "react";


const Slide1 = ({ scrollPosition }) => {
    return (
        <>
            <section
                className="info container"
                style={{
                    transform: `translateY(-${scrollPosition * 0.5}px)`, // Пример стиля для параллакса
                    // Добавьте другие стили, если необходимо
                }}
            >
                <div className="info__title">A NEW CRYPTO GAMING PLATFORM</div>
                <div className="info__content">
                    <div className="info__content-left">
                        <img className="img1" src={MainLine} />
                        <p>
                            Create and manage your gaming tournaments using web3{" "}
                            <br />
                            technologies
                        </p>
                        <button>
                            <span className="btn2">Explore</span>
                        </button>
                    </div>
                    <div className="info__content-center"></div>
                    <div className="info__content-right">
                        <p>Frequent questions at the start:</p>
                        <div className="info__content-right-box">
                            <img src={RightHand} alt="" />
                            <p>wtf crypto?</p>
                            <p className="disable-mob">is it fast?</p>
                            <p className="disable-mob">
                                how much does it cost?
                            </p>
                            <p>CS 2?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slide1;