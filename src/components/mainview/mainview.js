import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainview.css";

import iphonemockup1 from "../images/phone mockups/Phone mockup 1.png";
import illustration3 from "../images/illustration shapes/Illustartion 3.png";
import illustration1 from "../images/illustration shapes/Illustration 1.png";
import illustration4 from "../images/illustration shapes/Illustartion 4.png";
import illustration5 from "../images/illustration shapes/Illustartion 5.png";
import illustration6 from "../images/illustration shapes/Illustartion 6.png";
import illustration2 from "../images/illustration shapes/Illustration 2.png";
import illustration7 from "../images/illustration shapes/Illustartion 7.png";
import phonemockup2 from "../images/phone mockups/Phone mockup 2.png";
import friendship from "../images/icons/friendship.png";
import islamicnewyear from "../images/icons/islamic-new-year.png";
import mindfulness from "../images/icons/mindfulness.png";
import positive from "../images/icons/positive-thinking.png";
import sympathy from "../images/icons/sympathy.png";
import joinus from "../images/icons/connect with us.png";

function mainview() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="centertxt">The First AI Driven Muslim Community App</h1>
        <div>
          <p className="textbelow">
            Connect with like-minded Muslims committed to prioritizing mental
            health wellness
          </p>
        </div>
        <div className="input-button-wrapper">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className="emailinput"
            placeholder="Email"
          />
          <button className="join">Join our waitlist!</button>
        </div>
      </div>
      <img src={iphonemockup1} alt="mockup1" className="iphonemockup1" />
      <div className="illustration3">
        <img
          src={illustration3}
          alt="illustration3"
          className="illustration3"
        />
      </div>
      <p className="illu3text">
        Deenya is a compassionate chatbot that offers a listening ear for those
        in need.{" "}
      </p>
      <div className="illustration1">
        <img src={illustration1} alt="illustration3" />
      </div>
      <div className="illustration4">
        <img src={illustration4} alt="illustration3" />
      </div>
      <p className="illutext4">
        Whether you are struggling with mental health or going through a tough
        time, Deenya is here to help.{" "}
      </p>
      <div className="illu5">
        <img
          src={illustration5}
          alt="illustration5"
          className="illustration5"
        />
        <p className="illutext5">
          Deenya offers a judgment-free space for you to express yourself. Our
          chatbot draws from Islamic teachings and wisdom to provide
          personalized guidance and advice for your specific needs.
        </p>
      </div>
      <div className="illu6">
        <img
          src={illustration6}
          alt="illustration6"
          className="illustration6"
        />
        <p className="illutext6">
          Signing up for Deenya is quick, easy, and completely confidential. Our
          chatbot is available 24/7, so you can access it anytime and from
          anywhere.
        </p>
      </div>
      <div className="">
        <img src={illustration2} alt="illustration2" className="illu2" />
      </div>
      <div className="center">
        <p className="textcenter">
          Do not wait any longer to get the help and guidance you deserve. Sign
          up for Deenya today and start your journey towards emotional
          well-being and spiritual fulfilment
        </p>
      </div>
      <Link to="/signup">
        <button className="signupbtn">Sign up now</button>
      </Link>
      <div className="illustration7">
        <img src={illustration7} alt="illustration7" />
      </div>
      <div className="phonemockup2">
        <img src={phonemockup2} alt="phonemockup2" />
      </div>
      <div className="textmainpage">
        <p className="textmainsahkun">
          Whether you are seeking guidance, a sense of belonging, or a listening
          ear, Sahkun offers a supportive community where you can find the help
          you need.{" "}
        </p>
        <p className="textmainsm">
          Connect with like-minded individuals, participate in discussion
          forums, and access expert therapy services at your convenience.{" "}
        </p>
      </div>
      <button className="cnctus"> Connect with us</button>
      <img src={joinus} alt="waveicon" className="waveicon" />
      <div className="txt">
        <p>Sahkun: Where mental health meets community and therapy</p>
      </div>
      <div className="icon-container">
        <img src={sympathy} alt="Icon 5" className="icon5" />
        <p className="sympathytxt">Connect with Certified Therapists</p>
        <img src={positive} alt="Icon 4" className="icon4" />
        <p className="positivetxt">Join a Supportive Community</p>
        <img src={mindfulness} alt="Icon 3" className="icon3" />
        <p className="mindfulnesstxt">Find support through mentorship</p>
        <img src={islamicnewyear} alt="Icon 2" className="icon2" />
        <p className="islamicnewyeartxt">
          Receive guidance through islamic spirituality
        </p>
        <img src={friendship} alt="Icon 1" className="icon1" />
        <p className="friendshiptxt">Strengthen Your Mental Resilience</p>
      </div>
    </>
  );
}

export default mainview;
