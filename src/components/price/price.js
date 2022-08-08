import "./price.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const data = [
    {
        type: 'full-time',
        title: 'Full-time',
        text: 'employees working for 8 hours a day',
        options: [
            {
                name: 'assistants',
                price: '800€'
            },
            {
                name: 'marketing',
                price: '1000€'
            },
            {
                name: 'design',
                price: '1200€'
            },
            {
                name: 'development',
                price: '1400€'
            }
        ]
    },
    {
        type: 'part-time',
        title: 'Part-time',
        text: 'employees working for 4 hours a day',
        options: [
            {
                name: 'assistants',
                price: '500€'
            },
            {
                name: 'marketing',
                price: '700€'
            },
            {
                name: 'design',
                price: '900€'
            },
            {
                name: 'development',
                price: '1100€'
            }
        ]
    }
]

function Price () {

    return (
        <div className="price" id="price">
            <div className="wr-section">
                <div className="wr-section-title">
                    <AnimationOnScroll animateIn="animate__backInDown" animateOnce={true}>
                        <h3>PriСe</h3>
                    </AnimationOnScroll>
                </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateIn="animate__flipInY" animateOnce={true}>
                        <div className="price-content">
                            {data.map(({title, text, type, options}, index) => (
                                <div className={`price-block ${type}`} key={`price-block_${index}`}>
                                    <h4>{title}</h4>
                                    <div className="price-text">{text}</div>
                                    {options.map(({name, price}, optionIndex) => (
                                        <div className="price-offer" key={`option_${optionIndex}`}>
                                            <div className="price-name">{name}</div>
                                            <div className="price-pay">{price}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Price;