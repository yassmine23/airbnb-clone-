import React from "react";
import "./BecomeHostStyle.css";
import { Container } from "@mui/material/Container";
import UperFooter from "./../components/UperFooter/UperFooter";
import Footerhostormore from "./pagehost/footerhostormore";
import SectionOne from './pagehost/sectionone';
import SectionThree from "./pagehost/sectionThree";
import SectionFour from "./pagehost/sectionfour";

export default function BecomeAHost() {
  return (
    <>
    <div>
<SectionOne></SectionOne>
<SectionThree></SectionThree>
<SectionFour></SectionFour>
    </div>
  
     
   
      {/* section six */}
      <div
        className="container-fluid  rounded-4  py-5 col-11"
        style={{ backgroundColor: "#e6e6e6" }}
      >
        <div className="d-flex flex-wrap">
          <div className="col-6 p-5">
            <img src="images/sectionsix1.PNG" alt="" className="w-50" />
            <div>
              <p className="fs-2 pt-5 text-wrap lh-sm">
                Top-to-bottom protection. Always included, always free. Only on
                Airbnb.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light my-5 px-3 py-2 fs-5 border border-dark text-center"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="col-6 align-self-end">
            <img src="images/sectionsix2.PNG" alt="" className="w-100" />
          </div>
        </div>
      </div> 
      {/* section siven */}
       <div className="container-fluid py-5 col-12">
        <div className="d-flex flex-wrap">
          <div className="col-md-6 col-12">
            <img
              src="images/section7.PNG "
              alt=""
              className=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6 col-12 bgdark text-white text-center d-flex flex-column justify-content-center align-items-center">
            <h1>
              Try hosting on
              <br /> Airbnb
            </h1>
            <p>
              Join us. We’ll help you every <br />
              step of the way.
            </p>
            <button
              type="button"
              className="btn btnhost my-5 px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Let's go
            </button>
          </div>
        </div>
      </div> 
     <Footerhostormore></Footerhostormore>
    </>
  );
}
