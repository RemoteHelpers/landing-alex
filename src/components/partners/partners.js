import "./partners.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <div className="partners-block">
                                <img src={ImgOne} alt="#"/>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <div className="partners-block">
                                <img src={ImgTwo} alt="#"/>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <div className="partners-block">
                                <img src={ImgThree} alt="#"/>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <div className="partners-block">
                                <img src={ImgFour} alt="#"/>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;