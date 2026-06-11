import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Crafting clean, intuitive, and visually appealing user interfaces combined with seamless user experiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Designing and developing modern, responsive websites that look stunning on any device and deliver exceptional performance.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Designing sleek, modern, and highly intuitive mobile app interfaces that ensure effortless navigation and a delightful user journey.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;