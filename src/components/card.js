import React , {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTranslation } from "react-i18next";

//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from 'react-redux';
import "../components/cardStyle.css"
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import { async } from "@firebase/util";
import { RequestInfo } from "../Redux/Actions/AllActions";

// export default function MainCard() {
  // const { t } = useTranslation();
 
// import { RequestInfo } from './../Redux/Actions/AllActions';
export default function MainCard() {
  const { t } = useTranslation();
  
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const data = useSelector((state)=>state.allRequests.requests)

  const userInfo = useSelector((state)=>state.userData.info)
  const favArr = userInfo.favorit

  const [fav,setfav]= useState(favArr)
  const prof = useSelector((state)=>state.userData.info)
  const navigate = useNavigate()

  const uplod = async()=>{
    const dos = doc(db , "users" , prof.id)
        const newDat = {favorit : fav}
         await updateDoc(dos,newDat)
        
  }
  const addWishList =(dat)=>{
    setfav(fav.concat(dat))
    console.log(fav);
    if(Object.keys(prof).length > 0){
      uplod()    
    }else{
      navigate('/signUp')

    }
  }
  const dispatch = useDispatch()
  const toDetail = (dat)=>{
    dispatch(RequestInfo(dat))
    // navigate("/")

  }
  return (
    <>
   
      <div className="container d-flex">
        <div className="row ">


{data.map((dat,ky)=><Card className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
          <IconButton   size="large" onClick={()=>addWishList(dat)}  sx={{width:40, position:'absolute', top:10, left:230,zIndex:5}}>
  <FavoriteBorderIcon  className="text-danger" fontSize="inherit" style={{color:'white'}}/>
</IconButton>
            <Carousel

              interval={50000}
            >
              <Carousel.Item>
                <img  
                  className="d-block rounded wdth " 
                  src={dat.Url}
                  alt="First slide"
                  // width={640} 
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block  rounded wdth"
                  src={dat.Url2}
                  alt="Second slide"
                  // width={640} 

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth "
                  src={dat.Url3}
                  alt="third slide"
                  // width={640}  

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded wdth"
                  src={dat.Url4}
                  alt="forth slide"
                  // width={640} 

                />
              </Carousel.Item>
              
            </Carousel>
          
          <Link to={`/details`} key={dat.id} style={{textDecoration:'none'}}>
            <Card.Body className="text-muted">
             <div className='d-flex flex-row justify-content-between text-black'>
               <Card.Title onClick={()=>toDetail(dat)} >{dat.address}</Card.Title>
               <div> <StarIcon fontSize="inherit"/> 5.0</div>
               </div>
              <div >3.200 kilometers away</div>
              <div >Aug 29-sep 3</div>
              <div >${dat.price} night</div>
            </Card.Body>
            </Link>
          </Card>

)}
          
        </div>
      </div>
    </>
  );
}
