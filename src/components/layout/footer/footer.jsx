import React from 'react';
import s from "./footer.module.scss"
import bag from "../../../assets/img/logo.svg"
const Footer = () => {
    return (
       <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.footer}>
            <div className={s.block}>
                <img src={bag} alt="img" />
                <p>Lorem ipsum dolor sit amet <br />
                consectetur adipiscing <br />
                sed do eiusmod.
                </p>
            </div>
             <div className={s.block}>
                <h3>special catagories</h3>
                <a href="#">water resistant</a>
                <a href="#">charging system</a>
                <a href="#">artificial leather</a>
            </div>
                         <div className={s.block}>
                <h3>contact us</h3>
                <a href="#">(808) 555-0111</a>
                <a href="#">michelle.rivera@example.com</a>
                <a href="#">http://www.codehow.com</a>
            </div>
                <div className={s.block}>
                <h3>news latter</h3>
                <input type="text" placeholder='enter your email'/>
                <button>subscribe</button>
            </div>
            </div>
        </div>
       </footer>
    );
};

export default Footer;