import React, { useEffect,useState } from "react";
import Box from "@mui/material/Box";


import "./App.css";

import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostingDetails from './pages/HostingDetails';
import BecomeAHost from './pages/BecomeAHost';
import MapPage from "./pages/MapPage";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { languages } from './components/lang/languages';
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import UsersAccounts, { HosterAccounts,RequstsData } from './Redux/Actions/AllActions';


function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  //
  const dispatch = useDispatch()
  const allUser = useSelector((state)=>state.allUsers.users)
  const[use,setUsers]= useState(allUser)
  const userCollect = collection(db, "users")

  const allHosters = useSelector((state)=>state.allHosters.hosters)
  const[hosters,setHosters]= useState(allHosters)
  const hosterCollect = collection(db, "presenter")


  const allRequests = useSelector((state)=>state.allRequests.requests)
  const[requests,setRequests]= useState(allRequests)
  const requestCollect = collection(db, "Requests")

  //
  useEffect(() => {
   
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");

    //
    const getUsers = async()=>{
      const data = await getDocs(userCollect);
     setUsers(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };
    const getHosters = async()=>{
      const data = await getDocs(hosterCollect);
      setHosters(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };
    const getRequests = async()=>{
      const data = await getDocs(requestCollect);
      setRequests(data.docs.map( (doc) => ( {...doc.data(), id: doc.id} ) ))
   };
   getUsers()
   getHosters()
   getRequests()
   //
  }, [currentLanguage, t]);
  dispatch(UsersAccounts(use))
   dispatch(HosterAccounts(hosters))
   dispatch(RequstsData(requests))

  return (
    <>
    {/* <BecomeAHost></BecomeAHost> */}

    <Router>
     
    <Box
     style={{position: "sticky",top:'0' , backgroundColor:'white', zIndex:20}}
     >
          {/* <Header /> */}
          {/* <OptionsTab /> */}
        </Box>

        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/host" exact element={<BecomeAHost/>} />
        <Route path="/details" exact element={<HostingDetails/>} />
        <Route path="/map" exact element={<MapPage />} />



        </Routes>
    </Router>
   
    </>
   

  );
}

export default App;
