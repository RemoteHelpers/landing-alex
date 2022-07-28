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
                                <a href="#departments">Our departments</a>
                            </li>
                            <li>
                                <a href="#price">Price</a>
                            </li>
                            <li>
                                <a href="#advantages">Advantages</a>
                            </li>
                            <li>
                                <a href="#reviews">Reviews</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;