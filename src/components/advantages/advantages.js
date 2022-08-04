import "./advantages.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

/*img*/
import ImgPeople from "../../assets/img/advantages/people.png";
import ImgEllipse from "../../assets/img/advantages/Ellipse.png";



function Advantages () {

    return (
        <div className="advantages" id="advantages">
            <div className="wr-section">
                <div className="wr-section-title">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
                        <h3>Advantages</h3>
                    </AnimationOnScroll>
                </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInBottomRight">
                        <div className="advantages-content">
                            <div className="advantages-left">
                                <img src={ImgPeople} alt="#"/>
                            </div>
                            <div className="advantages-right">
                                <div className="advantages-steps">
                                    <div>1. A range of specialists</div>
                                    <div>2. Highly qualified assistance</div>
                                    <div>3. Training program of our employees</div>
                                    <div>4. Two shifts (part-time/full-time)</div>
                                    <div>5. We can adjust to your conditions</div>
                                </div>
                                <div className="advantages-img">
                                    <img src={ImgEllipse} alt="#"/>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Advantages;