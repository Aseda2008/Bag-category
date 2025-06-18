import React from 'react';
import s from "./Bag.module.scss"
import bag from "../../../assets/img/bag.svg"
const Bag = () => {
    return (
       <div className={s.Bag}>
        <div className="container">
            <div className={s.bag}>
<div className={s.bagImg}>
               <img src={bag} alt="img" />
</div>
           <div className={s.block}>
            <h3>Creative bag only for you.</h3>
            <h1>Lorem ipsum dolor sit amet <br />
            consectetur adipiscing elit <br />
            sed do eiusmod.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore  <br />
            magna aliqua. Ut enim ad minim veniam.</p>
            <button>see more</button>
           </div>
            </div>
        </div>
       </div>
    );
};

export default Bag;