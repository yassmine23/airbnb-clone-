import React from "react";
import "./Request .css";
import { useTranslation } from "react-i18next";
import Langs from "../lang/languages"
export default function FooterChangeLang(){
    const { t } = useTranslation();

    return<>
        <footer
        className="col-12 py-3 border-top"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container d-lg-flex flex-warp flex-row lh-lg d-none ">
          <div className="col-7">
            <p>{t("copy")}</p>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <div className="me-3"> <Langs/> </div>
            <div className="me-5">
              <a href={"/"}>$ USD</a>
            </div>
            <div className="fs-5 ">
            <a href="https://twitter.com/airbnb" target="_blank">
            <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/airbnb/" target="_blank">
            <i class="fa-brands fa-instagram mx-2"></i>
            </a>
            <a href="https://www.facebook.com/airbnbuk/?brand_redir=324826532457" target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
            </a>
            </div>
          </div>
        </div>
      </footer>
    </>
}