import "./steps.scss";

/*img*/
import ImgTriangle from "../../assets/img/steps/triangle.png";



const steps = [
    {
        number: '1',
        text: 'Remote Helpers exists 4+ years in the outstaffing sphere.'
    },
    {
        number: '2',
        text: 'We offer a pricing plan that is simple and has no hidden fees.'
    },
    {
        number: '3',
        text: 'The rates we provide correspond to the quality of our services.'
    },
    {
        number: '4',
        text: 'Our 150+ skilled employees regularly have courses. In addition to that, our company is on the trend of the modern market.'
    }
];

function Steps () {

    return (
        <div className="steps">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>Justified prices</h3>
                </div>
                <div className="wr-section-content">
                    <div className="steps-content">
                        <div className="steps-list">
                            {steps.map(({ number, text }, index) => (
                                <div className="steps-item" key={`steps-item_${index}`}>
                                    <div className="steps-number">
                                        { number }
                                    </div>
                                    <div className="steps-text">
                                        { text }
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="steps-img">
                            <img src={ImgTriangle} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;