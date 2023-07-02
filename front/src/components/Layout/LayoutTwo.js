import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterThree } from "../Footer";
import ScrollToTop from "../scroll-to-top";

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterThree footerBgClass={footerBgClass} />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutTwo;
