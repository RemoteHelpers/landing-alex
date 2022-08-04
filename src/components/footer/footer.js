import React, {useState, useEffect} from 'react';
import {Launcher} from 'react-chat-window';

import "./footer.scss";

/*img*/
import ImgIn from "../../assets/img/footer/in.png"



function Footer () {
    const [messageList, setMessageList] = useState([]);
    const [isOpenChat, setIsOpenChat] = useState(false);

    const onMessageWasSent = (message) => {
        setMessageList([...messageList, message]);
        // setTimeout(() => {
        //     setMessageList((prevMessageList) => [...prevMessageList, {
        //         author: 'them',
        //         type: 'text',
        //         data: { text: 'some text' }
        //     }]);
        // }, 1000);
    }

    return (
        <div className="footer">
            <div className="wr-section">
                <div className="wr-section-title"> </div>
                <div className="wr-section-content">
                    <div className="footer-content">
                        <div className="footer-breadcrumbs">
                            <div className="footer-list">
                                <a href="#departments">Our departments</a>
                                <a href="#price">Price</a>
                                <a href="#advantages">Advantages</a>
                                <a href="#reviews">reviews</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                        <div className="footer-img">
                            <img src={ImgIn} alt="#"/>
                        </div>
                    </div>
                    <div className="footer-chat" onClick={() => setIsOpenChat(true)}>
                        <div className="footer-chat-text">We’re online! Let’s talk a project</div>
                        <div className="footer-chat-mobile">Chat</div>
                    </div>
                    <Launcher
                        agentProfile={{
                            teamName: 'We’re online! Let’s talk a project',
                            imageUrl: ''
                        }}
                        onMessageWasSent={onMessageWasSent}
                        messageList={messageList}
                        handleClick={() => setIsOpenChat(!isOpenChat)}
                        isOpen={isOpenChat}
                        showEmoji
                    />
                </div>
            </div>
        </div>
    )
}


export default Footer;