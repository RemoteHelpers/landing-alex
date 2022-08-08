import "./partners.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

/*img*/
import ImgOne from "../../assets/img/partners/1.png"
import ImgTwo from "../../assets/img/partners/2.png"
import ImgThree from "../../assets/img/partners/3.png"
import ImgFour from "../../assets/img/partners/4.png"

const data = [
    {
        img: ImgOne
    },
    {
        img: ImgTwo
    },
    {
        img: ImgThree
    },
    {
        img: ImgFour
    }
]

function Partners () {

    return (
        <div className="partners">
            <div className="wr-section">
                <div className="wr-section-content">
                    <div className="partners-content">
                        {data.map(({img}, index) => (
                            <AnimationOnScroll className="partners-block" animateIn="animate__bounceIn" animateOnce={true} key={`partners-block_${index}`}>
                                <img src={img} alt="#"/>
                            </AnimationOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;