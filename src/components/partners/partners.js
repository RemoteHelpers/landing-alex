import "./partners.scss"

/*img*/
import ImgOne from "../../assets/img/partners/1.png"
import ImgTwo from "../../assets/img/partners/2.png"
import ImgThree from "../../assets/img/partners/3.png"
import ImgFour from "../../assets/img/partners/4.png"

function Partners () {

    return (
        <div className="partners">
            <div className="wr-section">
                <div className="wr-section-content">
                    <div className="partners-content">
                        <div className="partners-block">
                            <img src={ImgOne} alt="#"/>
                        </div>
                        <div className="partners-block">
                            <img src={ImgTwo} alt="#"/>
                        </div>
                        <div className="partners-block">
                            <img src={ImgThree} alt="#"/>
                        </div>
                        <div className="partners-block">
                            <img src={ImgFour} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;