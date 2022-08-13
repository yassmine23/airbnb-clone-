import React, { useState,useEffect } from "react";
import Header from './../Header';
import Footer from './../Footer';
import { db } from './../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleData } from "../../Redux/Actions/AllActions";
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const [user, AddUsers] = useState({
    userEmail: "",
    userPassword: "",
    userAge: "",
    userName: "",
  });
  const [err, AddError] = useState({
    errorEmail: null,
    errorPassword: null,
    name: null,
  });
  const inputChange = (e) => {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    const passRegex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$");

    if (e.target.name === "email") {
      AddUsers({
        ...user,
        userEmail: e.target.value,
      });
      AddError({
        ...err,
        errorEmail: regex.test(e.target.value) ? "" : "invalid email",
      });
    } else if (e.target.name === "password") {
      AddUsers({
        ...user,
        userPassword: e.target.value,
      });
      AddError({
        ...err,
        errorPassword: passRegex.test(e.target.value)? ""
          : "so small password",
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
const createRequest = async()=>{
  await addDoc(requestCollection,{name:user.userName, email:user.userEmail, password:user.userPassword,age:user.userAge})
  const x ={name:user.userName, email:user.userEmail, password:user.userPassword,age:user.userAge}
  dispatch(SingleData(x))
}
useEffect(()=>{
  if(Object.keys(sing).length > 0){
        
    navigate('/user')
  }
},[sing])
  return (
    <>
    <Header/>
      <div className="container mt-5">
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
            required
          />
                              <small className="text-danger">{err.errorEmail}</small>

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
            required
          />
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
            required
          />
                    {/* <small className="text-danger">{err.errorPassword}</small> */}
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
            required
          />
        </div>
        <button className="btn btn-primary" onClick={createRequest}>
          Creat Account
        </button>
      </div>
      {/* <Footer  /> */}
    </>
  );
};
export default SignUp;