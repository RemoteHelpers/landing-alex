import "./steps.scss";

/*img*/
import ImgTriangle from "../../assets/img/steps/triangle.png";

function Steps () {

    return (
        <div className="steps">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>Justified prices</h3>
                </div>
                <div className="wr-section-content">
                    <div className="steps-content">
                        <div className="steps-list">
                            <div className="steps-item">
                                <div className="steps-number">
                                    1
                                </div>
                                <div className="steps-text">
                                    Remote Helpers exists 4+ years in the outstaffing sphere.
                                </div>
                            </div>
                            <div className="steps-item">
                                <div className="steps-number">
                                    2
                                </div>
                                <div className="steps-text">
                                    We offer a pricing plan that is simple and has no hidden fees.
                                </div>
                            </div>
                            <div className="steps-item">
                                <div className="steps-number">
                                    3
                                </div>
                                <div className="steps-text">
                                    The rates we provide correspond to the quality of our services.
                                </div>
                            </div>
                            <div className="steps-item">
                                <div className="steps-number">
                                    4
                                </div>
                                <div className="steps-text">
                                    Our 150+ skilled employees regularly have courses. In addition to that, our company is on the trend of the modern market.
                                </div>
                            </div>
                        </div>
                        <div className="steps-img">
                            <img src={ImgTriangle} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;