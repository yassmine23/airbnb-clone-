import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { db } from './../../firebaseConfigure';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { SingleData } from '../../Redux/Actions/AllActions';
import Header from '../Header';

export default function LogIn() {
    // const allUsers = useSelector((state)=>state.allUsers.users)
    const [mail,setMail]=useState("")
    const [pass,setPass]=useState("")
    const changes=(e)=>{
        if(e.target.name === "mail"){
            setMail(e.target.value)
        }else if(e.target.name === "password"){
            setPass(e.target.value)
        
        }
      }

      const all = useSelector((state)=>state.allUsers.users)
      // const[us,setUsers]= useState(all)
    //   const userCollect = collection(db, "users")
    // useEffect(()=>{
    //   const getUsers = async()=>{
    //     const data = await getDocs(userCollect);
    //    setUsers(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
    //  };
    //  getUsers()
    // },[])



    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sing = useSelector((state)=>state.userData.info)
    // const [userData,setUserData]=useState(sing)
    useEffect(()=>{
      if(Object.keys(sing).length > 0){
        
        navigate('/user')
      }
    },[sing])
    const checkLog =()=>{
       if (all.some((check)=>check.email === mail)){
        const search = all.find((f)=>f.email === mail)
        if(search.password === pass){
            // setUserData(search)
  
           
            dispatch(SingleData(search))
            
            //console.log(userData);
            // if(Object.keys(sing).length ===0){
            //   console.log("not yet");

            // }else{
            //   navigate('/user')
            // }
            
        }else{
            alert("Wrong Password")
        }

       }else{
        navigate('/signUp')

       }
        // dispatch(SingleData(userData))
    }
    

    
  return <>
  <Header/>
  <div className='container'>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name='mail' value={mail} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
        <input type="email" className="form-control" name='password' value={pass} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <button className="btn btn-primary" onClick={checkLog}>Log In</button>

  </div>
  
  </>
}
