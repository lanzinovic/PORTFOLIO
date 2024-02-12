import { useState } from "react";
import "./work.scss"

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "WebDesign",
      desc: "As a developer, I immerse myself in lines of code, weaving logic into programs that solve problems and create experiences. Each bug conquered is a triumph, each line written a step forward.",
      img: "https://i.pinimg.com/474x/ca/28/fa/ca28fa28526fc1ff8da2c3ab29b585f0.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "As a developer, I immerse myself in lines of code, weaving logic into programs that solve problems and create experiences. Each bug conquered is a triumph, each line written a step forward.",
      img: "https://i.pinimg.com/474x/ca/28/fa/ca28fa28526fc1ff8da2c3ab29b585f0.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "As a developer, I immerse myself in lines of code, weaving logic into programs that solve problems and create experiences. Each bug conquered is a triumph, each line written a step forward.",
      img: "https://i.pinimg.com/474x/ca/28/fa/ca28fa28526fc1ff8da2c3ab29b585f0.jpg",
    },
  ];
  
  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0);
  }
  return (
    <div className="work" id="work">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://i.pinimg.com/474x/ca/28/fa/ca28fa28526fc1ff8da2c3ab29b585f0.jpg" alt="" />
            </div>
          </div>
        </div>))}
      </div> 
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")}/> 
      <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick("right")}/>   
    </div>
  );
}