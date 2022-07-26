import "./hero.scss";
import Images from "../../assets/img/hero/geometric_figure.jpg"

function Hero () {

    return (
        <div className="hero">
            <div className="wr">
                <div className="hero-content">
                    <h1>Start your project with <span>Remote Helpers</span></h1>
                    <div className="hero-text">
                        Our team of virtual assistants will help to manage your operations remotely
                    </div>
                    <div className="hero-btn">
                        <button>Get started </button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={Images} alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;