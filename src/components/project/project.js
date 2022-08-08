import { useState, useMemo, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { PopupModal } from "react-calendly";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Popup from "../popup/popup";

import "./project.scss";

/*img*/
import ImgAvatar from "../../assets/img/project/Avatar.png"


function Project () {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const countriesOptions = useMemo(() => countryList().getData(), []);
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
    const [country, setCountry] = useState('');
    const [isOpenCalendar, setIsOpenCalendar] = useState(false);


    useEffect(() => {
        register('country', {
            required: true
        });
    }, [])

    const changeHandler = value => {
        setValue('country', value, { shouldValidate: true })
        setCountry(value);
    }

    const onSubmit = (data) => {
        console.log(data, 'data');
        reset();
        setCountry('');
    }

    return (
        <div className="project" id="contact">
            <div className="wr-section">
                <div className="wr-section-title">
                    <AnimationOnScroll animateIn="animate__backInDown" animateOnce={true}>
                        <h3>start a project</h3>
                    </AnimationOnScroll>
                </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateIn="animate__rotateInUpRight" animateOnce={true}>
                        <div className="project-content">
                            <div className="project-user">
                                <div className="project-avatar">
                                    <img src={ImgAvatar} alt="#"/>
                                </div>
                                <div className="project-name h2">Discovery Call</div>
                                <div className="project-description">
                                    Have a new project in mind? Schedule a 30-minute introductory call and our team will at least give you some helpful tips.
                                </div>
                            </div>
                            <div className="project-block">
                                <form onSubmit={handleSubmit(onSubmit)} className="project-form">
                                    <div className="project-title h2">
                                        Get free consultation
                                    </div>
                                    <div className="project-form-block">
                                        <input
                                            className={`${errors.name ? 'invalid' : ''} ${watch('name') && 'valid'}`}
                                            type="text"
                                            placeholder="Name"
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div className="project-form-block">
                                        <input
                                            maxLength="12"
                                            className={`${errors.contactNumber ? 'invalid' : ''} ${watch('contactNumber') && 'valid'}`}
                                            type="tel"
                                            placeholder="Contact number"
                                            {...register("contactNumber", {
                                                valueAsNumber: true,
                                                validate: (value) => value > 0
                                            })}
                                        />
                                    </div>
                                    <div className="project-form-block">
                                        <input
                                            type="email"
                                            className={`${errors.email ? 'invalid' : ''} ${watch('email') && 'valid'}`}
                                            placeholder="Email"
                                            {...register("email", { required: true })}
                                        />
                                    </div>
                                    <div className="project-form-block">
                                        <Select
                                            className={`${errors.country ? 'invalid' : ''} ${watch('country') && 'valid'} default-select`}
                                            classNamePrefix="default-select"
                                            options={countriesOptions}
                                            onChange={changeHandler}
                                            value={country}
                                            placeholder="Country"
                                        />
                                    </div>
                                    <div className="project-form-block">
                                        <label className="file">
                                            <input type="text" name="fileName" readOnly={true} className={`${errors.file ? 'invalid' : ''} ${watch('file')?.[0]?.name && 'valid'}`} placeholder="Upload a RFP" value={watch('file')?.[0]?.name || ''} />
                                            <input className="project-fileInput" type="file" {...register("file", { required: true })} />
                                        </label>
                                    </div>
                                    <div className="project-form-block">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpenPopup(true);
                                            }}
                                        >
                                            What is an RFP?
                                        </a>
                                        <button className="btn-white">Submit</button>
                                    </div>
                                </form>
                                <div className="project-link">
                                    <PopupModal
                                        url="https://calendly.com/cogasof287/30min"
                                        onModalClose={() => setIsOpenCalendar(false)}
                                        open={isOpenCalendar}
                                        rootElement={document.getElementById("root")}
                                    />
                                    <div className="project-calendar" onClick={() => setIsOpenCalendar(true)}>Schedule a call</div>
                                    <a href="mailto:sales@rh-s.com">sales@rh-s.com</a>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <Popup
                title="What is an RFP?"
                isOpen={isOpenPopup}
                onClose={() => setIsOpenPopup(false)}
            >
                A request for proposal (RFP) is a great way for you to quickly get us up to speed on your project. It should include an introduction to your company and the reason for submitting your RFP. Tell us what it is you hope to accomplish with us and lay out any problems you or your users face with your current site. Lastly, please provide an overview of your project scope, timeline, and budget. We're happy to guide you through this on a call.
                <div className="project-fishnet">
                    <a href="#" download>Download our template :)</a>
                </div>
            </Popup>
        </div>
    )
}

export default Project;