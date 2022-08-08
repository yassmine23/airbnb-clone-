import React from "react";
import "../BecomeHostStyle.css";
import { LanguageIcon } from "@material-ui/icons/Language";

export default function Footerhostormore() {
  return (
    <>
      <footer lassName="container-fluid py-5 col-12">
        <div className=" flex-column">
          <div className="container d-flex flex-warp flex-md-row flex-column lh-lg">
            <div className="col-md-3 col-10">
              <p>Support</p>
              <div className="d-flex flex-column">
                <a href="">Help Center</a>
                <a> AirCover</a>
                <a>Safety information</a>
                <a>Supporting people with disabilities</a>
                <a>Cancellation options</a>
                <a>Our COVID-19 Response</a>
                <a>Report a neighborhood concern</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p>Community</p>
              <div className="d-flex flex-column">
                <a> Airbnb.org: disaster relief housing</a>
                <a>Support Afghan refugees</a>
                <a>Combating discrimination</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p>Hosting</p>
              <div className="d-flex flex-column">
                <a> Try hosting</a>
                <a>AirCover for Hosts</a>
                <a>Explore hosting resources</a>
                <a>Visit our community forum</a>
                <a>How to host responsibly</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p>Airbnb</p>
              <div className="d-flex flex-column">
                <a> Newsroom</a>
                <a>Learn about new features</a>
                <a>Letter from our founders</a>
                <a>Careers</a>
                <a>Investors</a>
                <a>Gift cards</a>
              </div>
            </div>
            <hr className=" d-md-none d-block container mt-5 w-100" />
          </div>
          <hr className=" d-none d-md-block container mt-5 w-100" />

          <div className="container d-md-flex flex-warp flex-row lh-lg d-none ">
            <div className="col-7">
              <p>© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap</p>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <div className="me-3">
                <i className="fa fa-light fa-globe fs-5"></i>
                <a> Language(Us) </a>
              </div>
              <div className="me-5">
                <a>$ USD</a>
              </div>
              <div className="fs-5 ">
                {/* <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-instagram"></i> */}
                <i className="mx-3 fa fa-facebook-f"></i>
                <i className=" mx-3 fa fa-twitter"></i>
                <i className="mx-3 fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
