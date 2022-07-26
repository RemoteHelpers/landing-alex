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
                                <a href="#">Our departments</a>
                                <a href="#">Prise</a>
                                <a href="#">Advantages</a>
                                <a href="#">reviews</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                        <div className="footer-img">
                            <img src={ImgIn} alt="#"/>
                        </div>
                    </div>
                    <div className="footer-chat">We’re online! Let’s talk a project</div>
                </div>
            </div>
        </div>
    )
}


export default Footer;