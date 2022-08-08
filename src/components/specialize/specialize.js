import "./specialize.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

/*img*/
import ImgBall from "../../assets/img/specialize/ball.png";
import ImgSquare from "../../assets/img/specialize/square.png";
import ImgImage from "../../assets/img/specialize/image.png";

const data = [
    {
        title: 'Mobile/Web designer',
        text: '<strong>Illustrators,graphic designers</strong> and UI/UX designers are responsible for developing the overall layout and <strong>production design</strong> for advertisements, brochures, magazines, and reports; creating commercial designs and images; creating user-centered designs.',
        icon: ImgBall
    },
    {
        title: 'Development',
        text: '<strong>Frontend, Backend, Full stack developer</strong> and <strong>QA tester</strong> specialists provide services including writing program codes, executing test scripts, helping with the design and development of software, debugging  and <strong>testing software</strong> to keep it optimized.',
        icon: ImgSquare
    },
    {
        title: 'Marketing',
        text: 'Our company offers <strong>SEO, SMM, PPC, Copywrite, Email marketing, and Influence marketing services. Remote employees</strong> possess all the necessary skills needed for <strong>improving sales, attracting new customers</strong> and <strong>promoting</strong> your brand or business.',
        icon: ImgImage
    }
];

function Specialize () {

    return (
        <div className="specialize" id="departments">
            <div className="wr-section">
                <div className="wr-section-title">
                    <AnimationOnScroll animateIn="animate__backInDown" animateOnce={true}>
                        <h3>We specialize in</h3>
                    </AnimationOnScroll>
                </div>
                <div className="wr-section-content">
                    <AnimationOnScroll animateIn="animate__backInRight" animateOnce={true}>
                        <div className="specialize-content">
                        {data.map(({ title, text, icon }, index) => (
                            <div className="specialize-block" key={`specialize-block_${index}`}>
                                <div className="specialize-post">
                                    <h4>{title}</h4>
                                    <div className="specialize-text" dangerouslySetInnerHTML={{ __html: text }} />
                                    <div className="specialize-img">
                                        <img src={icon} alt="#"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Specialize;