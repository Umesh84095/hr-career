import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../screen/Dashboard";
import Home from "../../screen/Home";
import Profile from "../../screen/Profile";
import Settings from "../../screen/Settings";
import Company from "../../screen/Company";
import TermsOfUse from "../../screen/TermsOfUse";
import PrivacyPolicy from "../../screen/PrivacyPolicy";
import CookiePolicy from "../../screen/CookiePolicy";
import Candidate from "../../Candidate/candidate";
import Jobposting from "../../Candidate/Jobposting";
import Hr from "../../Candidate/Hr";
import Home1 from "../../Candidate/Home";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/component-list" element={<Dashboard />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/company" element={<Company />} />
      <Route path="/termsofuse" element={<TermsOfUse />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/cookiepolicy" element={<CookiePolicy />} />
      <Route path="/candidate" element={<Candidate/>} />
      <Route path="/Jobposting" element={<Jobposting/>} />
      <Route path="/Hr" element={<Hr/>} />
      <Route path="/Home" element={<Home1/>} />
    </Routes>
  );
};

export default Navigator;
