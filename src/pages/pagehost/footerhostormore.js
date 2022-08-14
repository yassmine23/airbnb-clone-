import React from "react";
import "../BecomeHostStyle.css";
// import { LanguageIcon } from "@material-ui/icons/Language";
import { useTranslation } from "react-i18next";
import Langs, { languages } from "./../../components/lang/languages";

export default function Footerhostormore() {
  // const currentLanguageCode = cookies.get("i18next") || "en";
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <>
      <footer className="col-12 py-5 "style={{backgroundColor:"#F7F7F7"}}>
        <div className=" flex-column">
          <div className="container d-flex flex-warp flex-md-row flex-column lh-lg">
            <div className="col-md-3 col-10">
              <p className="fw-bold">{t("support")}</p>
              <div className="d-flex flex-column">
                <a>{t("helpc")}</a>
                <a> AirCover</a>
                <a>{t("Safetyinformation")}</a>
                <a>{t("supporting")}</a>
                <a>{t("cancellation")}</a>
                <a>{t("our")}</a>
                <a>{t("report")}</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p className="fw-bold">{t("community")}</p>
              <div className="d-flex flex-column">
                <a>{t("disaster")}</a>
                <a>{t("refugees")}</a>
                <a>{t("Combating")}</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p className="fw-bold">{t("app_title")}</p>
              <div className="d-flex flex-column">
                <a>{t("buttonone")}</a>
                <a>{t("AirCover")}</a>
                <a>{t("Explore")}</a>
                <a>{t("Visit")}</a>
                <a>{t("responsibly")}</a>
              </div>
              <hr className=" d-md-none d-block container mt-5 w-100" />
            </div>
            <div className="col-md-3 col-10">
              <p className="fw-bold">Airbnb</p>
              <div className="d-flex flex-column">
                <a> {t("Newsroom")}</a>
                <a>{t("Learn")}</a>
                <a>{t("Letter")}</a>
                <a>{t("Careers")}</a>
                <a>{t("Investors")}</a>
                <a>{t("Giftcards")}</a>
              </div>
            </div>
            <hr className=" d-md-none d-block container mt-5 w-100" />
          </div>
          <hr className=" d-none d-md-block container mt-5 w-100" />

          <div className="container d-md-flex flex-warp flex-row lh-lg d-none ">
            <div className="col-7">
              <p>{t("copy")}</p>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <div className="me-3">
                <Langs></Langs>
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
