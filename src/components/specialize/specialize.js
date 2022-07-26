import "./specialize.scss";

/*img*/
import ImgBall from "../../assets/img/specialize/ball.png";
import ImgSquare from "../../assets/img/specialize/square.png";
import ImgImage from "../../assets/img/specialize/image.png";

function Specialize () {

    return (
        <div className="specialize">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>We specialize in</h3>
                </div>
                <div className="wr-section-content">
                    <div className="specialize-content">
                        <div className="specialize-block">
                            <div className="specialize-post">
                                <h4>Mobile/Web designer</h4>
                                <div className="specialize-text">
                                    <strong>Illustrators,graphic designers</strong> and UI/UX designers are responsible for developing the overall layout and <strong>production design</strong> for advertisements, brochures, magazines, and reports; creating commercial designs and images; creating user-centered designs.
                                </div>
                                <div className="specialize-img">
                                    <img src={ImgBall} alt="#"/>
                                </div>
                            </div>
                        </div>
                        <div className="specialize-block">
                            <div className="specialize-post">
                                <h4>Development</h4>
                                <div className="specialize-text">
                                <strong>Frontend, Backend, Full stack developer</strong> and <strong>QA tester</strong> specialists provide services including writing program codes, executing test scripts, helping with the design and development of software, debugging  and <strong>testing software</strong> to keep it optimized.
                                </div>
                                <div className="specialize-img">
                                    <img src={ImgSquare} alt="#"/>
                                </div>
                            </div>
                        </div>
                        <div className="specialize-block">
                            <div className="specialize-post">
                                <h4>Marketing</h4>
                                <div className="specialize-text">
                                    Our company offers <strong>SEO, SMM, PPC, Copywrite, Email marketing, and Influence marketing services. Remote employees</strong> possess all the necessary skills needed for <strong>improving sales, attracting new customers</strong> and <strong>promoting</strong> your brand or business.
                                </div>
                                <div className="specialize-img">
                                    <img src={ImgImage} alt="#"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialize;