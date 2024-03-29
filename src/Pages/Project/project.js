import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Button } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import bookshare1 from "../../assets/img/projects/bookshare1.png";
import bookshare2 from "../../assets/img/projects/bookshare2.png";
import bookshare3 from "../../assets/img/projects/bookshare3.png";
import bookshare4 from "../../assets/img/projects/bookshare4.png";
import bookshare5 from "../../assets/img/projects/bookshare5.png";
import booksharelogo from "../../assets/img/projects/booksharelogo.png";
import epiclogo from "../../assets/img/projects/epiclogo.png";
import epic1 from "../../assets/img/projects/epic1.png";
import epic2 from "../../assets/img/projects/epic2.png";
import epic3 from "../../assets/img/projects/epic3.png";
import epic4 from "../../assets/img/projects/epic4.png";
import KerbletLogo from "../../assets/img/projects/Kerbletlogo.png";
import kb1 from "../../assets/img/projects/kb1.png";
import kb2 from "../../assets/img/projects/kb2.png";
import kb3 from "../../assets/img/projects/kb3.png";
import kb4 from "../../assets/img/projects/kb4.png";

import "./project.css";

const Project = () => {
  return (
    <div>
      <h3 className="pt-3 text-center  pb-3">PROJECT</h3>

      <Row className="align-items-start p-2  rounded">
        <Col xs={6} md={6} lg={6}>
          Bookshare Reader is the world's largest library of ebooks for people
          with reading barriers like dyslexia, blindness, low vision, and
          physical disabilities. Listen to books in high quality audio and
          customize your reading experience in ways that work for you. I was
          part of developent team for building the multiple user
          Interface,creating navigation of the App,Implemented Text to speech
          functionaly,search by Author Functionality. Tech Stack: React
          Natvie,AWS ,Apollo GraphQL,Redux,TypeScript
          <Row className="align-items-start p-2 rounded">
            <Button variant="secondary" size="sm" className="text-light">
              <a
                href="https://apps.apple.com/us/app/bookshare-reader/id1605201737"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Now
              </a>
            </Button>
          </Row>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <Image src={booksharelogo} alt="logo" className="booksharelogo" />
        </Col>
      </Row>

      <Row className="justify-content-center pt-5  rounded">
        <Col xs={6} md={6} lg={3}>
          <Image src={bookshare1} className="phoneimage" />

          <p className="header">Autheticate User</p>

          <p>
            Initial Screen of the app where user can log in by valid username
            and password
          </p>
        </Col>

        <Col xs={6} md={6} lg={3}>
          <Image src={bookshare3} className="phoneimage" />

          <p className="header"> Book Search</p>

          <p>Search the book by Most Recent,Title or Author</p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={bookshare4} className="phoneimage" />

          <p className="header"> Audio TextBook</p>

          <p>
            Provide all the book information on this screen,user with reading
            disability can able to read that Audio Textbook
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={bookshare5} className="phoneimage" />

          <p className="header"> Book Settings</p>

          <p>
            User with reading disability can change the book setting like font
            size,line spacing,text color
          </p>
        </Col>
      </Row>
      <hr
        style={{
          backgroundColor: "lightgrey",
          height: "1px",
          border: "none",
        }}
      />
      <Row className="align-items-start pt-5 rounded">
        <Col xs={6} md={6} lg={6}>
          Skitter TV is a leading Application Based IPTV technology solution
          that offers advanced Pay TV services for broadband services. Added
          several new features and designed new react-native components and
          logic with Redux for state management. Creating and debugging new app
          features for Android TV STBs and Apple TVOS, as well as building and
          running apps with XCode and Android Studio.
          <Row className="align-items-start p-2 rounded">
            <Button variant="secondary" size="sm">
              <a
                href="https://apps.apple.com/us/app/bookshare-reader/id1605201737"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Now
              </a>
            </Button>
          </Row>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <Image src={epiclogo} alt="logo" className="booksharelogo" />
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 rounded">
        <Col xs={6} md={6} lg={3}>
          <Image src={epic1} className="epictvimage" />

          <p className="header">Autheticate User Screen</p>

          <p>
            Initial Screen of the app where user can log in by valid username
            and password
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={epic2} className="epictvimage" />

          <p className="header"> User Recorded Programs</p>

          <p>
            User can record programs as series or individual recorded those will
            be displayed on home screen as cards
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={epic3} className="epictvimage" />

          <p className="header"> Channels Guide Screen</p>

          <p>
            Guide View where individual channels and their episodes along with
            airing time will be diplay.User can switch from mini player to full
            screen view
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={epic4} className="epictvimage" />

          <p className="header">Previously Viewed Channels</p>

          <p> Five Previously viewed channels will be diplay on Home screen </p>
        </Col>
      </Row>
      <hr
        style={{
          backgroundColor: "lightgrey",
          height: "1px",
          border: "none",
        }}
      />
      <Row className="align-items-start pt-5 mt-4 rounded">
        <Col xs={6} md={6} lg={6}>
          Kerblet provide multiple Car Parking solutions to customers across
          India. Technology-powered Kerblet Parking platform is changing how
          customers find and pay for parking. Designed and developed user
          interfaces for a Car Parking App, enhancing user experience and
          interaction. Developed detailed screens for parking information and
          booking reservations using React Native. Ensured efficient data
          storage and retrieval with Firebase backend solutions.
          <Row className="align-items-start p-2 rounded">
            <Button variant="secondary" size="sm">
              <a
                href="https://apps.apple.com/in/app/kerblet/id1557889145"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Now
              </a>
            </Button>
          </Row>
        </Col>
        <Col xs={6} md={6}>
          <Image src={KerbletLogo} alt="logo" className="booksharelogo" />
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 rounded">
        <Col xs={6} md={6} lg={3}>
          <Image src={kb1} className="phoneimage" />

          <p className="header">Vehicle Details</p>

          <p>
            {" "}
            Vehicle details allow users to attach multiple vehicles to a single
            account. It boasts a user-friendly interface with autocomplete text
            inputs for vehicle details, an image upload function that verifies
            number plate visibility
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={kb2} className="phoneimage" />

          <p className="header">Payment History</p>
          <p>
            {" "}
            This screen provides a clear and detailed Payment History for a
            parking app, allowing users to track their parking expenses for both
            personal and business needs.
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={kb3} className="phoneimage" />
          <p className="header">Reserve Parking</p>
          <p>
            {" "}
            This screen offers an intuitive booking process for two-wheelers,
            with options for timing, duration, and vehicle type.{" "}
          </p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Image src={kb4} className="phoneimage" />
          <p className="header">Parking Map</p>
          <p>
            This screen shows map based interface Users can interact with the
            map to locate and reserve parking. The screen also includes options
            to 'Check In' or 'Check Out', streamlining the user's parking
            experience with location-based functionality.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
