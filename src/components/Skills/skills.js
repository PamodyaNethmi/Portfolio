import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who am I & What I do</span>
            <span className="skillDesc"><span className="skillDesc">I am a passionate Computing student at ITUM, specializing in crafting clean, intuitive, and user-friendly web experiences. Proficient in HTML, CSS, JavaScript, and React.js, alongside creative design tools like Adobe Photoshop and Illustrator, I bridge the gap between complex frontend engineering and seamless UI/UX design. My goal is to secure an industry internship to leverage my skills in creating highly responsive and accessible applications that solve real-world problems.</span>
            </span>
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