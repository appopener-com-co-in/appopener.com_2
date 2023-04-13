// import { Component } from "react";
// import React from "react";
// import classes from "../components/Styles.module.css";
// import { getURLandredirect } from "../helper/api";
// import "../css/splash.css";
// import logo from "../assets/logo.avif";
// import new_logo from "../assets/Omni-logo.avif";
// import deetmelogo from "../assets/deet-me-logo.avif";
// import DeetLogo from "../assets/deet-logo.avif";
// import AdUI from "../assets/ui.avif";
// import deetpng from "../assets/deet.png"
// import spaceman from "../assets/footer-space-man.avif"
// import appopener_text from "../assets/ac.avif";
// import GoogleAd from "../components/GoogleAd";
// //import splash_adv from "../assets/splash/splash_adv.avif";

// class Splash extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { intentvalue: "", original_url: "", ostype: "" };
//   }

//   componentDidMount() {
//     console.log("Here");
//     let apptag = this.props.match.params.apptype;
//     let shortstring = this.props.match.params.shorturl;
//     getURLandredirect(apptag, shortstring).then((res) => {
//       this.setState({ intentvalue: res.data.app_intend });
//       this.setState({ original_url: res.data.originalURL });
//       this.setState({ ostype: res.data.os_type });
//       this.setState({ createdAt: res.data.created_at});
//       let app_intend = this.state.intentvalue;
//       let originalURL = this.state.original_url;

//       const urlDate = new Date(this.state.createdAt);
//       console.log(this.state.createdAt);
//       const finalDate = new Date("2033-01-07");

//       // TEST
//       // let anchor = document.createElement("a");
//       // anchor.setAttribute("href", "https://www.google.com/");
//       // anchor.dispatchEvent(new MouseEvent('mousedown'));
//       // anchor.dispatchEvent(new MouseEvent('mouseup'));
//       // anchor.click();

//       if (urlDate <= finalDate){
//         console.log("here");
//         var newLink = "https://opnr.app/" + apptag + "/" + shortstring;
//         console.log(newLink);
//         let anchor = document.createElement("a");
//         anchor.setAttribute("href", newLink);
//         console.log(anchor);
//         anchor.dispatchEvent(new MouseEvent('mousedown'));
//         anchor.dispatchEvent(new MouseEvent('mouseup'));
//         console.log("Hello");
//         //anchor.click();
//       }

//       const click_link = document.getElementById("abcd");
//       console.log(app_intend);
//       if (app_intend === "Desktop" || app_intend === "Mobile") {
//         app_intend = originalURL;
//       }
//       if (this.state.ostype == "windows") {
//         click_link.setAttribute("href", app_intend);
//         click_link.click();
//         // click_link.dispatchEvent(new MouseEvent('mousedown'));
//         // click_link.dispatchEvent(new MouseEvent('mouseup'));

//       } else {
//         click_link.setAttribute("href", app_intend);
//         window.location.assign(app_intend);
//       }
//     });
//   }

//   render() {
//     return (

//       <div className={classes.mainContainer}>
//         <div className="App">

//           {/* <GoogleAd slot="1295882794" googleAdId="ca-pub-5645705217995911"/> */}

//           <div className="container-1">
//             <img src={logo} alt="deet" />
//             {/* <span>{`OPNR.app`}</span> */}
//             <a href="https://opnr.app" target="_blank">
//                 {`OPNR.app`}
//             </a>
//             <br/>
//             <a id="abcd" target="_blank">
//               <button>{`Continue to the Link`}</button>
//             </a>
//           </div>

//           {/* <GoogleAd slot="4955640795" googleAdId="ca-pub-5645705217995911"/> */}

//           <div className="container-2">
//             <a
//                 href="https://opnr.app/"
//                 target="_blank"
//                 style={{ textDecoration: "none" }}
//             >
//                 <img
//                 src={deetpng}
//                 alt="Win an iPhone14 Pro in just ₹150"
//                 style={{ width: "100%", height: "100%" }}
//                 />
//             </a>
//             <div>
//               {/* <iframe width="360" height="270" src="https://www.youtube-nocookie.com/embed/zm6xa3ggt5A?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
//               {/* <iframe width="363" height="271" src="https://www.youtube.com/embed/zm6xa3ggt5A?autoplay=1" title="BB Ki Vines Productions- Taaza Khabar | Hotstar Specials | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
//               {/* <iframe width="360" height="270" src="https://www.youtube.com/embed/zm6xa3ggt5A?controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
//               {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/1k3HXPRDvCo?autoplay=1&mute=1"></iframe> */}
//             </div>
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default Splash;

//  CODE FOR GAURAV ARORA AND TESTING    .......//

import { Component } from "react";
import React from "react";
import classes from "../components/Styles.module.css";
import { getURLandredirect } from "../helper/api";
import "../css/splash.css";
import logo from "../assets/logo.avif";
import hel from "../assets/helmet.avif";
import profilepic from "../assets/profile-pic.png";
import wrap from "../assets/Stars.png";
import ig from "../assets/insta.svg";
import yt from "../assets/youtube.svg";
import li from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import png from "../assets/aprilf.png";
import GoogleAd from "../components/GoogleAd";
import venuspng from "../assets/venus.png";
// import SplashCard from "../components/SplashCard";
// import dummyData from "../dummyData";
import Card from "@mui/material/Card";
import t1 from "../assets/t1.jpg";
// import PromotionSection from "../components/PromotionSection";
//import splash_adv from "../assets/splash/splash_adv.png";
import { makeStyles } from "@material-ui/core/styles";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { intentvalue: "", original_url: "", ostype: "" };
  }

  componentDidMount() {
    //console.log("Here");
    let apptag = this.props.match.params.apptype;
    let shortstring = this.props.match.params.shorturl;
    getURLandredirect(apptag, shortstring).then((res) => {
      this.setState({ intentvalue: res.data.app_intend });
      this.setState({ original_url: res.data.originalURL });
      this.setState({ ostype: res.data.os_type });
      this.setState({ createdAt: res.data.created_at });
      let app_intend = this.state.intentvalue;
      let originalURL = this.state.original_url;

      const urlDate = new Date(this.state.createdAt);
      console.log(this.state.createdAt);
      const finalDate = new Date("2033-01-07");

      // TEST
      // let anchor = document.createElement("a");
      // anchor.setAttribute("href", "https://www.google.com/");
      // anchor.dispatchEvent(new MouseEvent('mousedown'));
      // anchor.dispatchEvent(new MouseEvent('mouseup'));
      // anchor.click();

      if (urlDate <= finalDate) {
        console.log("here");
        var newLink = "https://appopener.com/" + apptag + "/" + shortstring;
        console.log(newLink);
        let anchor = document.createElement("a");
        anchor.setAttribute("href", newLink);
        console.log(anchor);
        anchor.dispatchEvent(new MouseEvent("mousedown"));
        anchor.dispatchEvent(new MouseEvent("mouseup"));
        console.log("Hello");
        //anchor.click();
      }

      const click_link = document.getElementById("abcd");
      console.log(app_intend);
      if (app_intend === "Desktop" || app_intend === "Mobile") {
        app_intend = originalURL;
      }
      if (this.state.ostype == "windows") {
        click_link.setAttribute("href", app_intend);

        click_link.click();
        // click_link.dispatchEvent(new MouseEvent('mousedown'));
        // click_link.dispatchEvent(new MouseEvent('mouseup'));
      } else {
        click_link.setAttribute("href", app_intend);
        window.location.assign(app_intend);
      }
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <div>
            {/* <GoogleAd slot="9492391764" googleAdId="ca-pub-5645705217995911" /> */}
            <div className="container-1">
              {/* <img src={logo} alt="deet" /> */}
              {/* <span>{`OPNR.app`}</span> */}
              <a href="https://appopener.com" target="_blank">
                APPOPENER
              </a>

              <div className="profile">
                <div className="bio-info">
                  {/* <h2 style={{color:'white'}}>APPOPENER &#8594;	 OPNR.APP</h2> */}
                  <h2 style={{ color: "white", fontSize: "13px" }}>
                    <b>~ by Dr. DANDY</b>
                  </h2>
                </div>

                <div className="social-links">
                  <a href="https://opnr.app/yt/8gqth12j3">
                    <img src={yt} />
                  </a>
                  <a href="https://www.instagram.com/opnr.app/">
                    <img src={ig} />
                  </a>
                  <a href="https://opnr.app/lk/go4xn3nnw">
                    <img src={li} />
                  </a>
                  <a href="mailto:namanlies@gmail.com">
                    <img src={mail} />
                  </a>
                </div>

                <div className="bio-text">
                  <p>
                    (A next generation PWA to overpower next web 3.0 revolution
                    to rescue human research and resources for evolution)
                  </p>
                </div>

                <div className="link-btn">
                  <a id="abcd" target="_blank">
                    <button>{`CONTINUE TO THE LINK`}</button>
                  </a>
                </div>

                {/* <div className="subscribe-section">
                  <img src={profilepic}/>
                  <h3>Dr. Dheet Dandy</h3>
                  <button>Subscribe</button>
                </div> */}

                {/* <div><PromotionSection /></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bio-text-2">
          <p>
            Want a boost to your video?<br/> Publish your videos @Creators.College
          </p>
        </div> */}

        <div>
        {/* <div style={{ color: "white", padding: "10px", fontSize: "20px" }}>
            Watch and have fun:
          </div> */}

        
          <GoogleAd slot="6552881547" googleAdId="ca-pub-5645705217995911" />
        
        {/* <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/SzSYzHsml0U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}

        {/* <GoogleAd slot="9492391764" googleAdId="ca-pub-5645705217995911" />
          <br /> */}

        {/* <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/1k3HXPRDvCo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}

        {/* <GoogleAd slot="9338940957" googleAdId="ca-pub-5645705217995911" />
            <br /> */}

        {/* <div className="bio-text">
                  <p>
                    Feature your video here      
                    <span> &#8623;</span>
                  </p>
            </div> */}

        {/* <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/sbv7E8fOMeA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}

        {/* <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/wE0Io-GNOcA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}

        {/* <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rnvuCY2HQ6w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}

        {/* <GoogleAd slot="9492391764" googleAdId="ca-pub-5645705217995911" />
            <br />

            <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/XD0A9rcBGiw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div>

            <GoogleAd slot="9492391764" googleAdId="ca-pub-5645705217995911" />
            <br />

            <div className="yt-col">
              <Card
                sx={{ height: 315, marginBottom: "20px", borderRadius: "30px" }}
                className="splash-card"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rjtvH6q5RRE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card>
            </div> */}
        </div>

        {/* <div className="container-2">
             <a
                 href="https://opnr.app/"
                 target="_blank"
                 style={{ textDecoration: "none" }}
             >
                 <img
                 src={png}
                 alt=""
                 style={{ width: "100%", height: "100%" }}
                 />
             </a>
        </div> */}

        {/* <GoogleAd slot="9492391764" googleAdId="ca-pub-5645705217995911" /> */}

        {/* <div style={{width:'500px'}}>
          <GoogleAd slot="9103123923" googleAdId="ca-pub-5645705217995911" />
        </div> */}

        {/* <div className="container-2">
          {
              dummyData.map((val,ind)=>(
            <SplashCard details={val} ostype={this.state.ostype} />
           
            ))} */}

        {/* <div>
          <iframe width="360" height="270" src="https://www.youtube-nocookie.com/embed/zm6xa3ggt5A?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="363" height="271" src="https://www.youtube.com/embed/zm6xa3ggt5A?autoplay=1" title="BB Ki Vines Productions- Taaza Khabar | Hotstar Specials | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="360" height="270" src="https://www.youtube.com/embed/zm6xa3ggt5A?controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/1k3HXPRDvCo?autoplay=1&mute=1"></iframe>
        </div> */}
      </>
    );
  }
}

export default Splash;
