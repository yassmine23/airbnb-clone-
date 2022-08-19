import React, { useEffect,useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostingDetails from './pages/HostingDetails';
import BecomeAHost from './pages/BecomeAHost';
import MapPage from "./pages/MapPage";

import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { languages } from './components/lang/languages';
import Requestsuser from './components/Requestsuser/Requestsuser ';
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocs, where } from 'firebase/firestore';
import { db, storage } from './firebaseConfig';
import UsersAccounts, { HosterAccounts,RequstsData } from './Redux/Actions/AllActions';
import LogIn from './components/Forms/logIn';
import SignUp from './components/Forms/signUp';
import UserProfile from './components/Profiles/user profile/user-Profile';
import HosterProfile from './components/Profiles/hoster profile/hoster-Profile';
import SearchPage from './pages/SearchPage';
import WishList from "./components/WishList/wishList";
import { listAll, ref } from "firebase/storage";

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const allUser = useSelector((state)=>state.allUsers.users)
  const[use,setUsers]= useState(allUser)
  const userCollect = collection(db, "users")
  

  const allRequests = useSelector((state)=>state.allRequests.requests)
  const[requests,setRequests]= useState(allRequests)
  const requestCollect = collection(db, "Requests")

  
  useEffect(() => {
   
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");

<<<<<<< HEAD
=======
    //

    

>>>>>>> ca84967e5fe7e85bda1da61a953217d7cefd2cae
    const getUsers = async()=>{
      const data = await getDocs(userCollect);
     setUsers(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };
    
    
    const getRequests = async()=>{
      const data = await getDocs(requestCollect);
      setRequests(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };
   getUsers()
   getRequests()
   
  }, [currentLanguage, t]);
  dispatch(UsersAccounts(use))
   dispatch(RequstsData(requests))

  return (
    <>
  
    <Router>
     
<<<<<<< HEAD
    <Box
     style={{position: "sticky",top:'0' , backgroundColor:'white', zIndex:20}}
     >
          
        </Box>

=======
>>>>>>> ca84967e5fe7e85bda1da61a953217d7cefd2cae
        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/host" exact element={<BecomeAHost/>} />
        <Route path="/details" exact element={<HostingDetails/>} />

        <Route path="/map" exact element={<MapPage />} />
        <Route path="/logIn" exact element={<LogIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/user" exact element={<UserProfile />} />
        <Route path="/hoster" exact element={<HosterProfile />} />
        <Route path="/search" exact element={<SearchPage/>} />
        <Route path="/wish-list" exact element={<WishList/>} />

        <Route path="/details/book" exact element={<Requestsuser/>} />


        </Routes>
    </Router>
    
    </>
   

  );
}

export default App;
