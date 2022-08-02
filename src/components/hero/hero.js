import { useState } from 'react';
import {useForm} from "react-hook-form";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Images from "../../assets/img/hero/geometric_figure.jpg";
import ImgCat from "../../assets/img/hero/cat.png";


import "./hero.scss";

function Hero () {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data, 'data');
        reset();
    };

    return (
        <div className="hero" id="hero">
            <div className="wr">
                <div className="hero-content">
                    <AnimationOnScroll initiallyVisible={true} animateOnce={true} animateIn="animate__tada">
                        <h1>Start your project with <span>Remote Helpers</span></h1>
                    </AnimationOnScroll>
                    <div className="hero-text">
                        Our team of virtual assistants will help to manage your operations remotely
                    </div>
                    <button onClick={() => setIsOpenPopup(true)}>Get started</button>
                </div>
                <div className="hero-img">
                    <img src={Images} alt="#"/>
                </div>
            </div>
            <div className={`hero-popUp ${isOpenPopup ? 'popUp-open' : '' }`}>
                <div className="hero-popUp-wr">
                    <div className="hero-popUp-close">
                        <button onClick={() => setIsOpenPopup(false)} />
                    </div>
                    <div className="hero-popUp-content">
                        <div className="hero-popUp-title">Don't lose your chance!</div>
                        <div className="hero-popUp-item">We appreciate your interest in our company.</div>
                        <div className="hero-popUp-text">
                            That's why we give you a possibility of
                            <strong> free consultation!</strong> Fill in the form.
                        </div>
                        <div className="hero-popUp-block">
                            <div className="hero-popUp-img">
                                <img src={ImgCat} alt="#"/>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="hero-popUp-form">
                                <div className="hero-popUp-form-input">
                                    <input
                                        className={`${errors.name ? 'invalid' : ''} ${watch('name') && 'valid'} popUpWhite`}
                                        type="text"
                                        placeholder="Name"
                                        {...register("name", { required: true })}
                                    />
                                </div>
                                <div className="hero-popUp-form-input">
                                    <input
                                        maxLength="12"
                                        className={`${errors.contactNumber ? 'invalid' : ''} ${watch('contactNumber') && 'valid'} popUpWhite`}
                                        type="tel"
                                        placeholder="Contact number"
                                        {...register("contactNumber", {
                                            valueAsNumber: true,
                                            validate: (value) => value > 0
                                        })}
                                    />
                                </div>
                                <div className="hero-popUp-form-input">
                                    <input
                                        type="email"
                                        className={`${errors.email ? 'invalid' : ''} ${watch('email') && 'valid'} popUpWhite`}
                                        placeholder="Email"
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="hero-popUp-btn"><button>Get a consultation</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;