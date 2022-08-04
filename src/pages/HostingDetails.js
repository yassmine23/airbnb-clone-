import React from "react";
import HeaderDet from "../components/header/headerdet";
import Home from "../components/home/home";
import UnderHome from "../components/underHome/underHome";
import UpperFooter from "../components/UperFooter/UperFooter";
import FooterDet from "../components/footer/Footerdet";
import LastFooter from "../components/lastFooter/lastFooter";

import Container from "@mui/material/Container";


export default function HostingDetails() {
  return (
    <>
      <HeaderDet />
      <Container>
        <Home />
        <UnderHome />
        <UpperFooter />
        <FooterDet />
      </Container>
      <LastFooter />
    </>
  );
}
