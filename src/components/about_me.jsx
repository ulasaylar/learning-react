import Avatar from "@mui/material/Avatar";
import icon from "../img/icon.jpg";

const About_me = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-left-cont">
        <Avatar
          alt="Ulaş Aylar"
          src={icon}
          sx={{
            width: 200,
            height: 200,
            bgcolor: "#e8e8e8",
            border: "4px solid #FE7743",
          }}
          imgProps={{
            style: { transform: "scale(1.07)" },
          }}
        />
      </div>
      <div className="about-me-right-cont">
        <h1>
          Hi! I'm Ulaş <br></br> Thank you for visiting my website!
        </h1>
        <p>
          This is a portfolio site that I’ve designed and built entirely myself.
          <br></br> I’m currently studying Computer Programming at İzmir
          University of Economics.<br></br>Here, you’ll find some of the
          projects I’ve worked on.<br></br>Feel free to explore my work, and
          don’t hesitate to reach out if you’d like to collaborate or just have
          a chat!
        </p>
      </div>
    </div>
  );
};

export default About_me;
