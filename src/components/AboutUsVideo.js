import "./AboutUsVideo.css";

import videoGif from "../assets/aboutUsVideo.mp4";

const AboutUsVideo = () => {
    return (
        <>
            <div className="aboutUs">
                <h1>Something</h1>
                <h2>About our platform</h2>
                <video
                    className="aboutUs__video"
                    src={videoGif}
                    controls
                ></video>
            </div>
        </>
    );
};

export default AboutUsVideo;
