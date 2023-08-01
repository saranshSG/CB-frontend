import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="herosection3">
        <Navbar fontcolor="#fff" logocolor="white"/>
        <div className="content57">
          <div className="connect-border30">Contact Us</div>
          <div className="we-value-your1">
            We value your feedback and are eager to hear from you. Whether you
            have a question, suggestion, or simply want to say hello, our
            Contact Us page is the perfect place to reach out. Our dedicated
            team is ready to assist you and will respond to your inquiry as
            quickly as possible.
          </div>
        </div>
      </div>
      <div className="contactinfo1">
        <div className="getintouch1">
          <div className="get-in-touch1">Get In Touch</div>
          <div className="were-just-a1">We're Just a Click Away!</div>
        </div>
        <div className="content58">
          <div className="contactdetails1">
            <div className="phnoinput1">
              <img className="icon2" alt="" src="/icon.svg" />
              <div className="content59">
                <div className="phone-number4">Phone Number</div>
                <div className="div77">+91 98765 43210</div>
              </div>
            </div>
            <div className="emialinput1">
              <img className="icon3" alt="" src="/icon1.svg" />
              <div className="content59">
                <div className="phone-number4">E-mail</div>
                <a
                  className="youconnectcom1"
                  href="mailto:you@connectborder.com"
                  target="_blank"
                >{`you@connect.com `}</a>
              </div>
            </div>
          </div>
          <div className="contactform1">
            <div className="full-nameinput1">
              <div className="fnameinput1">
                <div className="label27">First Name</div>
                <div className="textbox27">
                  <i className="first-name1">First name</i>
                </div>
              </div>
              <div className="fnameinput1">
                <div className="label28">Last Name</div>
                <div className="textbox28">
                  <i className="last-name1">Last name</i>
                </div>
              </div>
            </div>
            <div className="fnameinput1">
              <div className="label29">E-mail</div>
              <div className="textbox29">
                <i className="last-name1">E-mail</i>
              </div>
            </div>
            <div className="fnameinput1">
              <div className="label30">Message</div>
              <div className="textbox30">
                <i className="last-name1">Type a message</i>
              </div>
            </div>
          </div>
        </div>
        <div className="othersendotp-btn5">
          <div className="pricing33">Send</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
