import "./reviews.scss";

/*img*/
import ImgFrame from "../../assets/img/reviews/Frame.png";
import ImgAvatar from "../../assets/img/reviews/foto.png";





function Reviews () {

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;