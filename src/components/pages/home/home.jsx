import React from 'react';
import s from "./home.module.scss"
import Frame from "../../../assets/img/Frame.svg"
const Home = () => {
    return (
<div className={s.home}>
    <div className="container">
<div className={s.card}>
            <div className={s.left}>
            <h3>Look Stylish Be Stylish.</h3>
            <h1>Look Stylish <br />
             Be <span>Stylish.</span></h1>
             <p>Before starting this business you should have ideas <br />
             about the market and products to Compete with the <br />
             Existing Businesses.</p>
             <button>join shop</button>
        </div>
        <div className={s.rigth}>
            <img src={Frame} alt="img" />
        </div>
</div>
    </div>
</div>
    );
};

export default Home;