import "./price.scss";

function Price () {

    return (
        <div className="price">
            <div className="wr-section">
                <div className="wr-section-title">
                    <h3>PriСe</h3>
                </div>
                <div className="wr-section-content">
                    <div className="price-content">
                        <div className="price-block full-time">
                            <div className="price-description">
                                <h4>Full-time</h4>
                                <div className="price-text">
                                    employees working for 8 hours a day
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">assistants</div>
                                    <div className="price-pay">800€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">marketing</div>
                                    <div className="price-pay">1000€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">design</div>
                                    <div className="price-pay">1200€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">development</div>
                                    <div className="price-pay">1400€</div>
                                </div>
                            </div>
                        </div>
                        <div className="price-block part-time">
                            <div className="price-description">
                                <h4>Part-time</h4>
                                <div className="price-text">
                                    employees working for 4 hours a day
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">assistants</div>
                                    <div className="price-pay">500€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">marketing</div>
                                    <div className="price-pay">700€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">design</div>
                                    <div className="price-pay">900€</div>
                                </div>
                                <div className="price-offer">
                                    <div className="price-name">development</div>
                                    <div className="price-pay">1100€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;