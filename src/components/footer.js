import "./footer.css";

import Playsync from "../assets/img/LogoPlaySync.svg";
import Youtube from "../assets/img/youtube.png";
import Twitter from "../assets/img/twitter.png";
import Discord from "../assets/img/discord.png"; 

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer__content container">
                    <div class="footer__content-logo">
                        <a href="#">
                            <img src={Playsync} />
                        </a>
                        <h1>PLAYSYNC</h1>
                    </div>
                    <h1>©All Rights Reserved</h1>
                    <div class="footer__content-svgs">
                        <a href="">
                            <img src={Youtube} alt="" />
                        </a>
                        <a href="">
                            <img src={Twitter} alt="" />
                        </a>
                        <a href="">
                            <img src={Discord} alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
