import React from 'react';
import './intro.css';
import bg from '../../assets/my.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,<br /></span>
            <span className="introText">I'm <span className="introName">Pamodya</span> <br />
            
            <span style={{ color: 'white', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Web Designer', 'Frontend Developer', 'Wordpress Developer']} 
                  loop={0} 
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>

            </span>
            <p className="introPara">I am a skilled and passinate web designer with experience in creating <br />visually appealing and user-friendly websites.</p>
            <Link><button className="btn"> <img src={btnImg} alt="Hire" className="btnImg" /> Hire Me </button></Link>
        </div>
        <div className="bg-container">
            <img src={bg} alt="Profile" className="bg" />
        </div>
    
  

    </section>
    
  );

}

export default Intro;
