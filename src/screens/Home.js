import { lazy, Suspense } from "react";

import Loading from "./Loading";

const VisualBox = lazy(() => import("../component/VisualBox.js"));
const UserMentionBox = lazy(() => import("../component/UserMentionBox.js"));
const AppScreenSliderBox = lazy(() =>
  import("../component/AppScreenSliderBox.js")
);
const GpsBox = lazy(() => import("../component/GpsBox.js"));
const BusinessLinkBox = lazy(() => import("../component/BusinessLinkBox.js"));
const FaqBox = lazy(() => import("../component/FaqBox.js"));
const CertificationBox = lazy(() => import("../component/CertificationBox.js"));
const Footer = lazy(() => import("../component/Footer.js"));

// import VisualBox from "../component/VisualBox";
// import UserMentionBox from "../component/UserMentionBox";
// import AppScreenSliderBox from "../component/AppScreenSliderBox";
// import GpsBox from "../component/GpsBox";
// import BusinessLinkBox from "../component/BusinessLinkBox";
// import FaqBox from "../component/FaqBox";
// import CertificationBox from "../component/CertificationBox";
// import Footer from "../component/Footer";

export default function Promotion() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <VisualBox />
        <UserMentionBox />
        <AppScreenSliderBox />
        <GpsBox />
        <BusinessLinkBox />
        <FaqBox />
        <CertificationBox />
        <Footer />
      </Suspense>
    </div>
  );
}
