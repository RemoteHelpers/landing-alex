import {useState} from 'react';
import "./fortune.scss";
import {useForm} from "react-hook-form";

/*import "./text";*/

function Fortune () {
    const [deg, setDeg] = useState(0);
    const [isRotate, setIsRotate] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data, 'data');
        reset();
    }

    const onClick = () => {
        setDeg(Math.floor(5000 + Math.random() * 5000));
        setIsRotate(true);
    };

    const onTransitionEnd = () => {
        const actualDeg = deg % 360;
        setIsRotate(false);
        setDeg(actualDeg)
    }

    return (
        <div className="fortune">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3 onClick={onClick}>Wheel of fortune</h3>
                </div>
                <div className="wr-section-content">
                    <div className="fortune-content">
                        <div className="fortune-wheel">
                            <div
                                className="wheel"
                                onTransitionEnd={onTransitionEnd}
                                style={{
                                    transition: isRotate ? 'all 5s ease-out' : 'none',
                                    transform: `rotate(${deg}deg)`
                                }}
                            >
                            </div>
                            <div className="deal-wheel">
                            <ul className="spinner"> </ul>
                            <div className="ticker"> </div>
                            <button className="btn-spin">Испытай удачу</button>
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
                                    {...register("email", { required: true })}
                                />
                                <label htmlFor="agree" className="checkbox">
                                    <input type="checkbox" id="agree" />
                                    <span className="checkbox-text">I allow the processing of personal data</span>
                                </label>
                                <button>SPIN THE WHEEL!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fortune;