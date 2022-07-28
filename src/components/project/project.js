import { useState, useMemo, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import countryList from 'react-select-country-list';

import "./project.scss";

/*img*/
import ImgAvatar from "../../assets/img/project/Avatar.png"


function Project () {
    const countriesOptions = useMemo(() => countryList().getData(), []);
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
    const [country, setCountry] = useState('');
    const [fileValue, setFileValue] = useState('');

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
        <div className="project">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>start a project</h3>
                </div>
                <div className="wr-section-content">
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
                            <div className="project-title h2">
                                Get free consultation
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="project-form">
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
                                        type="text"
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
                                    <a href="#">What is an RFP?</a>
                                    <button className="btn-white">Submit</button>
                                </div>
                            </form>
                            <div className="project-link">
                                <div className="project-calendar">Schedule a call</div>
                                <a href="mailto:sales@rh-s.com">sales@rh-s.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;