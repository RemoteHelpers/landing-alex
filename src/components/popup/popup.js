import {useEffect} from "react";
import './popup.scss';

function Popup ({ isOpen, onClose, title, children }) {

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    return (
        <div className={`popup ${isOpen ? 'open-popup' : '' }`}>
            <div className="popup-wr">
                <button className="popup-btn" onClick={onClose}> </button>
                <div className="popup-title">{title}</div>
                <div className="popup-text">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;