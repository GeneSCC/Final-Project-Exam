import React from "react";
import './Header.css';

const Header = () => {
    return(
        <>
            <div className="bg" ></div>
            <header className="body"  id="home">
                <div className="main">
                    <div>
                        <h1>Sweetpot Web Design Studio</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                    </div>
                    <div className="intro-divider"></div>
                    <div className="btnsec">
                        <button>FACEBOOK </button>
                        <button>GITHUB</button>
                        <button>LINKEDIN</button>
                    </div>
                </div>
                
            </header>
            <div className="header-border"></div>
        </>
    );
}

export default Header;

