import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
function Home1() {
  return (
    <div>
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
        </div>
    </div>
  )
}

export default Home1
