import React, { useEffect, useState } from 'react'
import Header from './../../Header';
import { useSelector } from 'react-redux';
import Footerhostormore from './../../../pages/pagehost/footerhostormore';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from 'react-router-dom';
import "../../../components/cardStyle.css"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function UserProfile() {
  const x = useSelector((state)=>state.userData.info)
  const allData = useSelector((state)=>state.allRequests.requests)
  const accepted = allData.filter(info=>info.email == x.email)


  const[review,setReview]= useState([])
  const reviewCollection = collection(db, "AskRequest")
  const reviewData = review.filter(info=>info.email == x.email)


  const[reject,setRejected]= useState([])
  const requestCollect = collection(db, "Rejected")
  const rejectedData = reject.filter(info=>info.email == x.email)
  useEffect(()=>{

    const getReject = async()=>{
      const data = await getDocs(requestCollect);
      setRejected(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };

   const getReview = async()=>{
    const data = await getDocs(reviewCollection);
    setReview(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
 };
   getReject()
   getReview()
  },[])
  return (<>
  <Header />
  <div className='container'>
    <div className='row py-5'>
      <div className='col-md-3 border border-1 rounded p-3 text-center h-50'>
        <div className=' '>
          <img className='rounded-circle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU'/>
        </div>
        <div className='my-2'>
          <h2>{x.name}</h2>
        </div>
      </div>
      <div className='col-md-9 px-5'>
        <h2>Hi, {x.name}</h2>

        <hr className='mb-0'></hr>
        <h5>Reservsions</h5>
        <h6 className='text-center'>There is no Reservesion Data </h6>


        <hr className='mb-0 mt-5'></hr>
        <h5>Host Requests</h5>
        {(reviewData.length <= 0)?<h6 className='text-center'>There is no Requests in Review </h6>:
        <div className="row ">
        {reviewData.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
            <div className='w-100'>

                    <Carousel
        
                      interval={50000}
                    >
                      <Carousel.Item>
                        <img  
                          className="d-block rounded wdth w-100" 
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
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
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
                    </div>
                  </Card>
        
        )}
        </div>
        }


        <hr className='mb-0 mt-5'></hr>
        <h5>Accepted Requsts</h5>
        {(rejectedData.length <= 0)?<h6 className='text-center'>There is no Rejection Data</h6>:
        <div className="row ">
        {rejectedData.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >
            <div className='w-100'>

                    <Carousel
        
                      interval={50000}
                    >
                      <Carousel.Item>
                        <img  
                          className="d-block rounded wdth w-100" 
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
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
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
                    </div>
                  </Card>
        
        )}
        </div>
        }
        
        <hr className='mb-0 mt-5'></hr>
        <h5>Rejected Requests</h5>
        {(accepted.length <= 0)?<h6 className='text-center'>There is no Acceptance Yet</h6>:
        <div className="row ">
        {accepted.map((dat,ky)=><Card className="col-lg-4 col-md-4 col-sm-6 col-xs-12 border-0 "  key={ky} >

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
                  
                  <Link to={`/details`}  style={{textDecoration:'none'}}>
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
        }
      </div>
    </div>
  </div>
  <Footerhostormore/>
  </>
  )
}
