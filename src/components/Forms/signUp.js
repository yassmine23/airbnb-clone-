import React, { useState,useEffect } from "react";
import Header from './../Header';
import Footer from './../Footer';
import { db } from './../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleData } from "../../Redux/Actions/AllActions";
import { useDispatch } from 'react-redux';
import Joi from "joi";

const SignUp = () => {
  const [user, AddUsers] = useState({
    userEmail: "",
    userPassword: "",
    userAge: "",
    userName: "",
  });
  const [errr, setError] = useState({
    errorEmail: null,
    errorPassword: null,
    errorName: null,
    errorAge:null,
  });

  const inputChange = (e) => {
   

    if (e.target.name === "email") {
      AddUsers({
        ...user,
        userEmail: e.target.value,
      });

    } else if (e.target.name === "password") {
      AddUsers({
        ...user,
        userPassword: e.target.value,
      });

    } else if (e.target.name === "age") {
      AddUsers({
        ...user,
        userAge: e.target.value,
      });
      
    } else if (e.target.name === "userName") {
      AddUsers({
        ...user,
        userName: e.target.value,
      });
    }
  };



  const sing = useSelector((state)=>state.userData.info)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const requestCollection = collection(db, "users")
  const [errList,setErrList]=useState([])
const createRequest = async(e)=>{
  e.preventDefault()
  const x ={name:user.userName, email:user.userEmail, password:user.userPassword,age:user.userAge}

let schema = Joi.object({
  name: Joi.string().alphanum().min(10).required(),
  email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).required(),
  age:Joi.number().min(18).max(60).required()
})

const res = schema.validate(x ,{abortEarly: false})
if(res.error){

  setErrList(res.error.details)
console.log(errList);
  errList.map((d)=>{
    if (d.context.label =="name") {
      setError({...errr, errorName:"length of full name at least 10 characters"}) 
    }
    else if (d.context.label =="email"){
      setError({...errr, errorEmail:"invalid email"})     }
    else if (d.context.label =="password"){
      setError({...errr,errorPassword:"* between 8 and 15 charcters ,must have at least one of small and capital and special character and one number"})
      }else if (d.context.label =="age"){
      setError({...errr, errorAge:"* Your age must be between 18 and 60"})
    }
    return errr
  })


}else{

  await addDoc(requestCollection,{name:user.userName, email:user.userEmail, password:user.userPassword,age:user.userAge})
  dispatch(SingleData(x))
}

  
}
useEffect(()=>{
  if(Object.keys(sing).length > 0){
        
    navigate('/user')
  }
},[sing])
  return (
    <>
    <Header/>
      <form onSubmit={createRequest} className="container mt-5">

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.userEmail}
            onChange={(e) => inputChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            
          />
                              <small className="text-danger">{errr.errorEmail}</small>

        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="userName"
            className="form-control"
            value={user.userName}
            onChange={(e) => inputChange(e)}
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
          <small className="text-danger">{errr.errorName}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.userPassword}
            onChange={(e) => inputChange(e)}
            id="exampleInputPassword"
            
          />
                     <small className="text-danger">{errr.errorPassword}</small> 
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={user.confPassword}
            onChange={(e) => inputChange(e)}
            id="exampleInputAge"
          />
          <small className="text-danger">{errr.errorAge}</small> 
        </div>
        <button className="btn btn-primary">
          Creat Account
        </button>
      </form>
      {/* <Footer  /> */}
    </>
  );
};
export default SignUp;