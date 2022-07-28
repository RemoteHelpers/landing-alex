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



const contentsSlider = [
    {
        message: 'We urgently needed an English-speaking content creator for customer projects and demos. We were given four great matches very quickly and the opportunity to interview them all online. Based on that, we were soon through to the final selection phase and implementation.',
        user: {
            avatar: ImgAvatar,
            name: 'Anders Willumsen',
            company: 'CEO at Eurekos Systems ApS'
        }
    },
    {
        message: 'The people I have dealt with to date have been highly professional, and the lady who worked with me on our revamp of our website did everything I had asked of her with diligence and speed. Thank you, Super Job.',
        user: {
            avatar: ImgAvatarTwo,
            name: 'Paul O’Riordan',
            company: 'Client'
        }
    },
    {
        message: 'The objective behind our collaboration was Graphik and Design for the creation of HTML5 Banner Sets. The fast reaction on our demands and the constructive an creative way the employee.',
        user: {
            avatar: ImgAvatarThree,
            name: 'Andy Kulosa',
            company: 'CEO at Terranova Werbung'
        }
    },
];

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
                            {contentsSlider.map(({ message, user }, index) => (
                                <div className="reviews-block" key={`reviews-block_${index}`}>
                                    <div className="reviews-message">
                                        {message}
                                    </div>
                                    <div className="reviews-user">
                                        <div className="reviews-avatar">
                                            <img src={user.avatar} alt="#"/>
                                        </div>
                                        <div className="reviews-info">
                                            <div className="reviews-name">{user.name}</div>
                                            <div className="reviews-company">{user.company}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;