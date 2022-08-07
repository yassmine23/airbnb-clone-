import React from "react";
import "../BecomeHostStyle.css";

export default function SectionFour() {
  return (
    <>
      {/* section four */}
      <div className="container-fluid sectionfour rounded-4  py-5 col-11">
        <div className="d-flex flex-column flex-wrap p-5 gy-5 rounded-4 text-white d-flex text-center align-items-center justify-content-evenly">
          <h1 className="fontsizeh1">
            Help house 100,000 refugees fleeing Ukraine
          </h1>
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary text-white fs-5  border-white"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* section five */}
      {/* <div> */}
      <div className=" container-fluid position-relative py-5 mh-100 my-5 text-center col-11">
        <img
          src="images/sectionfive.jpg"
          alt="sectionfive"
          className="w-100 rounded-4"
        />
        <div className="position-absolute top-50 start-50 text-white text-center translate-middle">
          <h1 className="h-1 my-5">
            Questions about hosting? Ask a Superhost.
          </h1>
          <button type="button" className="btn btn-light my-5 px-5 fs-5">
            Learn more
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
