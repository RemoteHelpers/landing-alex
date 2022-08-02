import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Partners from "./components/partners/partners";
import Specialize from "./components/specialize/specialize";
import Price from "./components/price/price";
import Steps from "./components/steps/steps";
import Advantages from "./components/advantages/advantages";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";
import Project from "./components/project/project";
import Fortune from "./components/fortune/fortune";

function App() {

    return (
        <div className="app">
            <Header />
            <Hero/>
            <Partners/>
            <Specialize/>
            <Price/>
            <Steps/>
            <Advantages/>
            <Reviews/>
            <Partners/>
            <Project/>
            <Footer/>
            <Fortune/>
        </div>
    );
}

export default App;
