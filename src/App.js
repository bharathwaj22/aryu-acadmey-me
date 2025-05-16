import './App.css';
import Router from './router/Router.js';
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout.js";
// import CookieConsent from 'react-cookie-consent';



function App() {
  return (
    <div className="">

       <BrowserRouter>
       {/* <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Reject"
          cookieName="cookieConsent"
          expires={30}
          enableDeclineButton
          onDecline={() => {
            console.log("User rejected cookies.");
          }}
          style={{
            background: "#FFFFFF",
            color: "#000",
            padding: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
          buttonStyle={{
            background: "#0000FF",
            color: "#FFFFFF",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          declineButtonStyle={{
            // background: "#FF0000",
            // color: "#FFFFFF",
            background: "#0000FF",
            color: "#FFFFFF",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "5px",
          }}
        >
          We use cookies to improve your experience, personalize content, and
          analyze traffic. By clicking{" "}
          <span className="font-semibold">"Accept,"</span> you agree to data
          processing.
          <br />
          <a
            href="/privacy-policy"
            className="text-blue-500 underline font-semibold"
          >
            Privacy Policy
          </a>
        </CookieConsent> */}
       <Layout> 
     <Router></Router>
     </Layout> 
     </BrowserRouter>
      
    </div>
  );
}

export default App;
