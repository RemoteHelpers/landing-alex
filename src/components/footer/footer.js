import "./footer.scss";

/*img*/
import ImgIn from "../../assets/img/footer/in.png"



function Footer () {

    return (
        <div className="footer">
            <div className="wr-section">
                <div className="wr-section-title"> </div>
                <div className="wr-section-content">
                    <div className="footer-content">
                        <div className="footer-breadcrumbs">
                            <div className="footer-list">
                                <a href="#departments">Our departments</a>
                                <a href="#price">Price</a>
                                <a href="#advantages">Advantages</a>
                                <a href="#reviews">reviews</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                        <div className="footer-img">
                            <img src={ImgIn} alt="#"/>
                        </div>
                    </div>
                    <div className="footer-chat">
                        <div className="footer-chat-text">We’re online! Let’s talk a project</div>
                        <div className="footer-chat-mobile">Chat</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;