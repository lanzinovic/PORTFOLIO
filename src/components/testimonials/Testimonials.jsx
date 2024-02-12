import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Vic Starboy",
      title: "Junior developer",
      img: "https://i.pinimg.com/474x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg",
      icon: "assets/twitter.png",
      desc: `Thank you for such a well written article. It’s full of insightful information and entertaining descriptions. Your point of view is the best among many. `,
    },
    {
      id: 2,
      name: "Vic ",
      title: "Junior developer",
      img: "https://i.pinimg.com/474x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg",
      icon: "assets/youtube.png",
      desc: `Thank you for such a well written article. It’s full of insightful information and entertaining descriptions. Your point of view is the best among many. `,
      featured: true,
    },
    {
      id: 1,
      name: "Starboy",
      title: "Junior developer",
      img: "https://i.pinimg.com/564x/b4/1a/8a/b41a8acccf85813efcddf1d93061ecc6.jpg",
      icon: "assets/linkedin.png",
      desc: `Thank you for such a well written article. It’s full of insightful information and entertaining descriptions. Your point of view is the best among many. `,
    },
  ];
  
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" alt="" className="left" />
            <img src={d.img} alt="" className="user"/>
            <img src={d.icon} alt="" className="right" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div> 
    </div>
  );
}