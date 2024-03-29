import React from 'react'
import Typewriter from "typewriter-effect";
import styled from "styled-components";



const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;

  margin-top: -125px;
 
  strong {
    font-size: 1.25em;
  }
  div {
    color: #0f316e;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 45px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;
const TitleMessage  =()  =>(
    <MyTitleMessage>
        <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
         
          <span>
            <strong>Smita Deshpande</strong>
          </span>
        </div>
        
      </div>
    </div>

    </MyTitleMessage>
)

export default  TitleMessage  
