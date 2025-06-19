import React, { useState } from 'react';
import s from "./category.module.scss"
import bag from "../../../assets/img/image.svg"
const Category = () => {
    const [activeSection,setActiveSection] = useState("water")
    return (
        <div className={s.category}>
        <div className="container">
       <div className={s.categorys}>
<p
  onClick={() => setActiveSection("water")}
  className={`${s.water} ${activeSection === "water" ? s.active : ""}`}
>
  water resistant
</p>
<p
  onClick={() => setActiveSection("charging")}
  className={`${s.charging} ${activeSection === "charging" ? s.active : ""}`}
>
  charging system
</p>
<p
  onClick={() => setActiveSection("artificial")}
  className={`${s.artificial} ${activeSection === "artificial" ? s.active : ""}`}
>
  artificial leather
</p>
<p
  onClick={() => setActiveSection("modern")}
  className={`${s.modern} ${activeSection === "modern" ? s.active : ""}`}
>
  modern clothes
</p>

       </div>
       {activeSection === "water" && (
         <div className={s.water}>
                     <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         </div>
       )}
              {activeSection === "charging" && (
         <div className={s.charging}>
         <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         <img src={bag} alt="img" />
         </div>
       )}
           {activeSection === "artificial" && (
         <div className={s.artificial}>artificial</div>
       )}
        {activeSection === "modern" && (
         <div className={s.modern}>modern</div>
       )}
        </div>
        </div>
    );
};

export default Category;