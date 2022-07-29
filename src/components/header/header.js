import { useState, useMemo } from "react";

import "./header.scss";
import logo from "../../assets/img/logo.png";

function Header () {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const classOpenMenu = useMemo(() => isOpenMenu ? 'open' : '', [isOpenMenu]);

    const onCloseMenu = () => setIsOpenMenu(false);

    return (
        <header className="header">
            <div className="wr">
                <div className="header-content">
                    <div className="header-logo">
                        <a href="#"><img src={logo} alt="#"/></a>
                    </div>
                    <button type="button" className={`header-btn ${classOpenMenu}`} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        {[1, 2, 3, 4, 5, 6].map((item) => <span key={item} />)}
                    </button>
                    <div className={`header-nav ${classOpenMenu}`}>
                        <ul>
                            <li>
                                <a href="#departments" onClick={onCloseMenu}>Our departments</a>
                            </li>
                            <li>
                                <a href="#price" onClick={onCloseMenu}>Price</a>
                            </li>
                            <li>
                                <a href="#advantages" onClick={onCloseMenu}>Advantages</a>
                            </li>
                            <li>
                                <a href="#reviews" onClick={onCloseMenu}>Reviews</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={onCloseMenu}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;