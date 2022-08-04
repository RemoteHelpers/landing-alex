import {useRef, useState, useEffect} from 'react';
import "./fortune.scss";
import {useForm} from "react-hook-form";
import ImgEllipse from "../../assets/img/advantages/Ellipse.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const prizes = [
    {
        text: "Part-time worker discount ( 10% )",
        color: "#1C1C1E",
        border: "2px #fff solid"
    },
    {
        text: "Free web design consultation",
        color: "#3A3A3C",
    },
    {
        text: "Full-time worker discount ( 10 % )",
        color: "#2C2C2E",
    },
    {
        text: "Free SMM consultation",
        color: "#1C1C1E",
    },
    {
        text: "5% discount on any service",
        color: "#2C2C2E",
    },
    {
        text: "SMM services discount (  10 % )",
        color: "#1C1C1E",
    },
    {
        text: "Free developer consultation",
        color: "#3A3A3C",
    },
    {
        text: "Website promotion plan",
        color: "#2C2C2E",
    }
];

let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;
let spinnerStyles;

const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";


function Fortune() {
    const wheelRef = useRef();
    const spinnerRef = useRef();
    const tickerRef = useRef();
    const [isSubmit, setIsSubmit] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm();

    const onSubmit = async (data) => {
        setIsSubmit(true);
        await new Promise(res => {
            startQuiz();
            setTimeout(() => res(), 9000);
        });
        alert(JSON.stringify({...data, prize: prizes[currentSlice].text}, null, 2));
        reset();
        setIsSubmit(false);
    }

    const createConicGradient = () => {
        spinnerRef.current.setAttribute(
            "style",
            `background: conic-gradient(
                from -90deg,
                ${prizes
                .map(({color}, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
                .reverse()
            });`
        );
    };

    const createPrizeNodes = () => {
        prizes.forEach(({text, color, reaction}, i) => {
            const rotation = ((prizeSlice * i) * -1) - prizeOffset;
            spinnerRef.current.insertAdjacentHTML(
        "beforeend",
            `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
                    <span class="text">${text}</span>
                </li>`
            );
        });
    };

    const setupWheel = () => {
        createConicGradient();
        createPrizeNodes();
        prizeNodes = wheelRef.current.querySelectorAll(".prize");
    };

    const spinertia = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const runTickerAnimation = () => {
        const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
        const a = values[0];
        const b = values[1];
        let rad = Math.atan2(b, a);

        if (rad < 0) rad += (2 * Math.PI);

        const angle = Math.round(rad * (180 / Math.PI));
        const slice = Math.floor(angle / prizeSlice);

        if (currentSlice !== slice) {
            currentSlice = slice;
        }

        tickerAnim = requestAnimationFrame(runTickerAnimation);
    };

    const startQuiz = () => {
        rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
        prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
        wheelRef.current.classList.add(spinClass);
        spinnerRef.current.style.setProperty("--rotate", rotation);
        runTickerAnimation();
    }

    useEffect(() => {
        spinnerStyles = window.getComputedStyle(spinnerRef.current)
        setupWheel();
    }, []);

    return (
        <div className="fortune">
            <div className="wr-section">
                <div className="wr-section-title">
                    <AnimationOnScroll animateIn="animate__backInDown" animateOnce={true}>
                        <h3>Wheel of fortune</h3>
                    </AnimationOnScroll>
                </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="fortune-content">
                            <div className="fortune-wheel">
                                <div className="deal-wheel" ref={wheelRef}>
                                    <ul className="spinner" ref={spinnerRef}> </ul>
                                    <div className="ticker" ref={tickerRef}> </div>
                                </div>
                            </div>
                            <div className="fortune-block">
                                <form onSubmit={handleSubmit(onSubmit)} className="fortune-form">
                                    <h4>Spin and win discounts!</h4>
                                    <div className="fortune-text">
                                        Enter your email and press the button
                                    </div>
                                    <input
                                        type="email"
                                        className={`${errors.email ? 'invalid' : ''} ${watch('email') && 'valid'}`}
                                        placeholder="Email"
                                        {...register("email", {required: true})}
                                    />
                                    <label htmlFor="agree" className={`${errors.agree ? 'invalid' : ''} checkbox`}>
                                        <input
                                            type="checkbox"
                                            id="agree"
                                            {...register("agree", {required: true})}
                                        />
                                        <span className="checkbox-text">I allow the processing of personal data</span>
                                    </label>
                                    <button disabled={isSubmit} type="submit">Spin the wheel!</button>
                                </form>
                                <div className="fortune-img">
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

export default Fortune;