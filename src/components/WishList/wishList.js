import React, {useState}  from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';

import Header from './../Header';
import '../cardStyle.css'
import { WishListData } from "../../Redux/Actions/AllActions";
import { useTranslation } from 'react-i18next';
import cookies from "js-cookie";


export default function WishList() {
    const data = useSelector((state)=>state.userData.info)
    const wshList = data.favorit
    // where addWishList fun

    const favourits = useSelector((state)=>state.favoritData.wishArr)
    console.log(favourits);
    console.log(wshList);
    const [newFav, setNewFAv]=useState(favourits)
    const remov= (dat)=>{
      setNewFAv(newFav.filter(f=>f.title !== dat.title))
    }
    const dispatch = useDispatch()
    dispatch(WishListData(newFav))

    const{t}=useTranslation();
    const currentLanguageCode = cookies.get("i18next");
    return <>
    <Header />
    <div className="container d-flex mt-3">
          <div className="row ">
    {(wshList.length ===0 && favourits.length ===0)?<h3 className="text-center mt-4">
  {t("Youdidnotwishlist")}</h3>:
    (wshList.length >= favourits.length )?<>
    {wshList.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
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
        <i className={`fa-solid fa-heart ${wshList.some(f=>f.title === dat.title)? 'text-danger': 'text-light'}  fa-xl child` }onClick={()=>remov(dat)}></i>
      </Carousel>
    
    <Link to={`/details/`}  style={{textDecoration:'none'}}>
      <Card.Body className="text-muted">
       <div className='d-flex flex-row justify-content-between text-black'>
         <Card.Title >{dat.address}</Card.Title>
         <div> <StarIcon fontSize="inherit"/> 5.0</div>
         </div>
        <div >3.200 kilometers away</div>
        <div >Aug 29-sep 3</div>
        <div >${dat.price} night</div>
      </Card.Body>
      </Link>
    </Card>
  
  )}</>:
  <>
    {favourits.map((dat,ky)=><Card className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
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
        {currentLanguageCode==='ar'?(<i className={`fa-solid fa-heart ${favourits.some(f=>f.titleAr === dat.titleAr)? 'text-danger': 'text-light'}  fa-xl child` }onClick={()=>remov(dat)}></i>):(<i className={`fa-solid fa-heart ${favourits.some(f=>f.title === dat.title)? 'text-danger': 'text-light'}  fa-xl child` }onClick={()=>remov(dat)}></i>)}
        {/* <i className={`fa-solid fa-heart ${favourits.some(f=>f.title === dat.title)? 'text-danger': 'text-light'}  fa-xl child` }onClick={()=>remov(dat)}></i> */}
      </Carousel>
    
    <Link to={`/details/`}  style={{textDecoration:'none'}}>
      <Card.Body className="text-muted">
       <div className='d-flex flex-row justify-content-between text-black'>
        {currentLanguageCode==='ar'?
        (<Card.Title >{dat.addressAr}</Card.Title>):
        (<Card.Title >{dat.address}</Card.Title>)}
         <div> <StarIcon fontSize="inherit"/> 5.0</div>
         </div>
        <div >Aug 29-sep 3</div>
        <div >${dat.price} night</div>
      </Card.Body>
      </Link>
    </Card>
  
  )}</>}
  </div>
  </div>
  </> 
    
  
}