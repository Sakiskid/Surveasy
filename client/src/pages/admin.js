import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
import {Grid, Row, Col} from "react-bootstrap"
import Input from "../components/Input/input";
import "./style.css";
import SurveyList from "../components/SurveyList/surveyList"

function Admin() {
  return (
    //navbar will be set up here 
    // ---- Have the log out button link here 
    //starting the side survey page 
    <div>
      <h1>Welcome</h1>
      <SurveyList
      name = "password"
      >
      </SurveyList>


    </div>
  );
}

export default Admin;