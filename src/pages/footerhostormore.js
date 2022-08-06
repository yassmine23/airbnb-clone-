import React from "react";
import "./BecomeHostStyle.css";

export default function Footerhostormore() {
  return (
    <>
           <footer lassName="container-fluid py-5 col-12">
        <div className="row flex-column">
          <div className="container d-flex flex-warp flex-row w-75">
          <div className="col-3">
            <p>Support</p>
            <div>
              <a>Help Center</a>
              <a> AirCover</a>
              <a>Safety information</a>
              <a>Supporting people with disabilities</a>
              <a>Cancellation options</a>
              <a>Our COVID-19 Response</a>
              <a>Report a neighborhood concern</a>
            </div>
          </div>
          <div className="col-3">
            <p>Community</p>
            <div>
              <a> Airbnb.org: disaster relief housing</a>
              <a>Support Afghan refugees</a>
              <a>Combating discrimination</a>
            </div>
          </div>
          <div className="col-3">
            <p>Hosting</p>
            <div>
              <a> Try hosting</a>
              <a>AirCover for Hosts</a>
              <a>Explore hosting resources</a>
              <a>Visit our community forum</a>
              <a>How to host responsibly</a>
            </div>
          </div>
          <div className="col-3">
            <p>Airbnb</p>
            <div>
              <a> Newsroom</a>
              <a>Learn about new features</a>
              <a>Letter from our founders</a>
              <a>Careers</a>
              <a>Investors</a>
              <a>Gift cards</a>
            </div>
            
          </div>

          </div>
          <hr className=" container mt-5 w-75"/>

         <div>
          <p>© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap</p>
         </div>
        </div>

      </footer>
    </>
  );
}
