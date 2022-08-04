import "./rainbow.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const box = [
    {
        text: 'a range of specialists',
        color: '#ED5C5F',
    },
    {
        text: 'highly qualified assistance',
        color: '#FDB22B'
    },
    {
        text: 'training program of our employees',
        color: '#10806A'
    },
    {
        text: 'two shifts (part-time/full-time)',
        color: '#5F61EC'
    },
    {
        text: 'we can adjust to your conditions',
        color: '#AC26FB'
    },
];

function Rainbow () {
    return (
        <div className="rainbow">
            <div className="wr-section">
                <div className="wr-section-title"> </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateIn="animate__backInLeft" animateOnce={true}>
                        <div className="rainbow-content">
                            {box.map(({text, color}, index) => {
                                return (
                                    <div key={index} className="rainbow-block" style={{ borderColor: color}}>
                                        <div className="rainbow-item" style={{ backgroundColor: color}}>
                                            {text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Rainbow;