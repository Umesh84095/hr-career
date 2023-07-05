import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../components/common/controls/Button";
import CONSTANTS from "../constants/constants";
import "../Candidate/Home.css";

const Home = () => {
  return (
    <>
    <div className='home'>
        <Link to={"/Hr"}>
        <button type="button" className='hr'>Hr</button> 
        </Link> 
        <Link to={"/Jobposting"}>
        <button type="button" className='jobposting'>Jobposting</button> 
        </Link> 
        <Link to={"/candidate"}>
        <button type="button" className='candidate'>Candidate</button> 
        </Link> 
        <Link to={"/component-list"}>
        <button type="button" className='candidate'>List Of Components</button> 
        </Link>
      </div>
      <Grid
        container
        style={{ justifyContent: "flex-end", padding: "0px 30px" }}
      >
        
        <div
          className="content-body-div"
          style={{ display: "block", paddingLeft: "20px", width: "70%" }}
        >
          <h1>Embark on an exhilarating journey with Techsophy, catapulting your career to new heights and unlocking unparalleled opportunities for growth and success. </h1>
          
        </div>
      </Grid>
    </>
  );
};

export default Home;
