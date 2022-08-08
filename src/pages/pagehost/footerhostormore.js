import React from "react";
import "../BecomeHostStyle.css";
// import { LanguageIcon } from "@material-ui/icons/Language";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import cookies from "js-cookie";
import { languages } from './../../components/lang/languages';

export default function Footerhostormore() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <>

      <footer className="container-fluid py-5 col-12">
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
             
                <div className="dropdown">
              <button
                className="border-0 bg-transparent  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <i className="fa fa-light fa-globe fs-5"></i>
               <a> Language(Us) </a>
                {/* Dropdown button */}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <a
                  href={""}
                      className={classNames("dropdown-item", {
                        disabled: currentLanguageCode === code,
                      })}
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                    >
                     
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
              </div>
              <div className="me-5">
                <a>$ USD</a>
              </div>
              <div className="fs-5 ">
            
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
