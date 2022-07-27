import Slider from "react-slick";

/*style*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.scss";

/*img*/
import ImgFrame from "../../assets/img/reviews/Frame.png";
import ImgAvatar from "../../assets/img/reviews/foto.png";
import ImgAvatarTwo from "../../assets/img/reviews/foto-2.png";
import ImgAvatarThree from "../../assets/img/reviews/foto-3.png";

function Reviews () {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="reviews">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>reviews</h3>
                </div>
                <div className="wr-section-content">
                    <div className="reviews-content">
                        <div className="reviews-img">
                            <img src={ImgFrame} alt="$"/>
                        </div>
                        <Slider {...settings}>
                            <div className="reviews-block">
                                <div className="reviews-message">
                                    We urgently needed an English-speaking content creator for customer projects and demos. We were given four great matches very quickly and the opportunity to interview them all online. Based on that, we were soon through to the final selection phase and implementation.
                                </div>
                                <div className="reviews-user">
                                    <div className="reviews-avatar">
                                        <img src={ImgAvatar} alt="#"/>
                                    </div>
                                    <div className="reviews-info">
                                        <div className="reviews-name">Anders Willumsen </div>
                                        <div className="reviews-company">CEO at Eurekos Systems ApS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-block">
                                <div className="reviews-message">
                                    The people I have dealt with to date have been highly professional, and the lady who worked with me on our revamp of our website did everything I had asked of her with diligence and speed. Thank you, Super Job.
                                </div>
                                <div className="reviews-user">
                                    <div className="reviews-avatar">
                                        <img src={ImgAvatarTwo} alt="#"/>
                                    </div>
                                    <div className="reviews-info">
                                        <div className="reviews-name">Paul O’Riordan</div>
                                        <div className="reviews-company">Client</div>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-block">
                                <div className="reviews-message">
                                    The objective behind our collaboration was Graphik and Design for the creation of HTML5 Banner Sets. The fast reaction on our demands and the constructive an creative way the employee.
                                </div>
                                <div className="reviews-user">
                                    <div className="reviews-avatar">
                                        <img src={ImgAvatarThree} alt="#"/>
                                    </div>
                                    <div className="reviews-info">
                                        <div className="reviews-name">Andy Kulosa</div>
                                        <div className="reviews-company">CEO at Terranova Werbung</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;