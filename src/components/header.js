import React from 'react'
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const scrollToContent = () => {
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
    // Need extra pixels to account for navbar
    window.scrollBy(0, -50);
}

const Header = (props) => (
    <div className={props.isMainPage ? 'header main-page' : 'header'}>
        {props.isMainPage ? (
            <div className={'box'}>
                <div className={'drop-shadow'}>
                    <h1>Steven Warner</h1>
                    <FontAwesomeIcon size={'6x'} icon={faArrowDown} onClick={scrollToContent}/>
                </div>
            </div>
        )  : <div className={'drop-shadow'}>
                <h1>Steven Warner</h1>
            </div>}
    </div>
)

export default Header