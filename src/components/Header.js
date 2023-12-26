import './Header.css';

import logo from "../assets/img/LogoPlaySync.svg";
import search from "../assets/img/search.png";
import notifications from "../assets/img/notifications.png";
import message from "../assets/img/message.png";

const Header = ()=>{
    return( 
        <>
         <header className="header container containerMob">
            <div className="header__logo">
                <a href="#"><img src={logo}/></a>
                <h1>PLAYSYNC</h1>
            </div>
            <div className="header__navigation">
                <div className="header__search">
                    <a href="#"><img src={search} alt="" /></a>
                    <input
                        type="text"
                        placeholder="Search tournaments and more"
                    />
                </div>
                <div className="header__btns">
                    <a className="header__btns-notifications" href="#"
                        ><img src={notifications} alt="" />
                    </a>
                    <a className="header__btns-message" href="#"
                        ><img src={message}
                    /></a>
                    <div className="header__btns-create btn1">
                        <a  href="#"><h1>Create</h1></a>
                        <div></div>
                    </div>
                    <a className="header__btns-profile" href="#"><div></div></a>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;