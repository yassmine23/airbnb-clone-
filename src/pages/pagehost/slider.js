import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./offerslider.css";
function Slider() {
  const names = [
    "",
    "Hosting my studio changed my life and gifted me with memorable experiences and people.",
    "Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
    "We’re able to keep our culture alive by hosting our pasta-making experience.",
    "Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home",
    "I love hosting my eco-home so people can connect with nature and their loved ones.",
    "Hosting my bedouin tent has introduced me to people around the world",
    "",
  ];
  const images = [
    "",
    "assets/images/slid1.jpg",
    "assets/images/slid2.jpg",
    "assets/images/slid3.jpg",
    "assets/images/slide4.jpg",
    "assets/images/slide5.jpg",
    "assets/images/slide6.jpg",
    " ",
  ];
  const pirce = [
    "",
    "assets/images/slider1 (3).png",
    "assets/images/slider1 (4).png",
    "assets/images/slider1 (2).png",
    "assets/images/slider1 (6).png",
    "assets/images/slider1 (5).png",
    "assets/images/slider1 (1).png",
    " ",
  ];
  const pirceBefore = [
    "",
    "Host in Milan",
    "Host in Atlanta",
    "Host in Palombara Sabina",
    "Host in Chiang Mai",
    "Host in Paraty",
    "Host in Wadi Rum",
    " ",
  ];

  const [i, setI] = useState(0);
  function handleChange1() {
    if (i < 5) {
      setI((i) => i + 1);
      console.log(i);
    }
  }
  function handleChange2() {
    if (i > 0) {
      setI((i) => i - 1);
      console.log(i);
    }
  }
 
  return (
    <Row className="mainContainer m-0 p-0">
      <Col lg={12} className="p-0">
        <Row className="thirdRow m-0 p-0  ">
          <Row className="p-0 m-0 d-flex justify-content-center  d-flex align-items-center ">
            <div
              className="p-0 me-2"
              style={{ width: "3%", hight: "3%", fontSize: ".1rem" }}
            >
            
            </div>
            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i]} className="imgBadge" />
              <Card.Body>
                <span className="textpricebefore text-decoration-line-through "></span>
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img
                variant="top"
                src={images[i + 1]}
                className="imgBadge"
              />
              <Card.Body>
                <Card.Title className="textcolor text-center">
                  {names[i + 1]}
                </Card.Title>
              
                <Card.Img variant="top" src={pirce[i + 1]} className="imgBadge w-50" />
                <button onClick={handleChange2} className="btn btn-light rounded-5">
                    <ArrowBackIosNewIcon sx={{ height: 11, width: 11 }} />
                  </button>
                  <button onClick={handleChange1} className="btn btn-light rounded-5">
                    <ArrowForwardIosIcon sx={{ height: 11, width: 11 }} />
                  </button>
            
                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i + 1]}
                </span>
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard " style={{ width: "17%" }}>
              <Card.Img
                variant="top"
                src={images[i + 2]}
                className="imgBadge"
              />
            </Card>

         
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default Slider;
