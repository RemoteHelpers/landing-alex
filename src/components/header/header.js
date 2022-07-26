import "./header.scss";
import logo from "../../assets/img/logo.png";

function Header () {

    return (
        <header className="header">
            <div className="wr">
                <div className="header-content">
                    <div className="header-logo">
                        <a href="#"><img src={logo} alt="#"/></a>
                    </div>
                    <div className="header-nav">
                        <ul>
                            <li>
                                <a href="#">Our departments</a>
                            </li>
                            <li>
                                <a href="#">Prise</a>
                            </li>
                            <li>
                                <a href="#">Advantages</a>
                            </li>
                            <li>
                                <a href="#">Reviews</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;