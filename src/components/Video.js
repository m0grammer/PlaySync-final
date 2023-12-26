import "./Video.css";

import videoGif from "../assets/animation.mp4";
import React from "react";

const Video = ({ scrollPosition }) => {
    return (
        <>
            <div className="videoInformation">
                <div
                    className="video"
                    style={{
                        transform: `translateY(-${scrollPosition * 0.57}px)`,
                        position: "relative",
                        zIndex: "2",
                        top: `-${scrollPosition * 0.57}px`, // Пример стиля для параллакса
                        // Добавьте другие стили, если необходимо
                    }}
                >
                    <h1>DO YOU HAVE A NICE TEAM?</h1>
                    <video
                        className="video__gif"
                        src={videoGif}
                        muted
                        autoPlay
                        loop
                    ></video>
                </div>
            </div>
        </>
    );
};

export default Video;
