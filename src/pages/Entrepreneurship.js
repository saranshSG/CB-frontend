import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Entrepreneurship.css";
const Entrepreneurship = () => {
  return (
    <div className="entrepreneurship24">
      <div className="herosec4">
        <Navbar fontcolor="#fff" logocolor="white"/>
        <div className="content3">
          <div className="connect-border14">Entrepreneurship</div>
          <div className="want-to-upscale-container1">
            <span className="want-to-upscale1">
              Want to upscale your startup but don’t know how?
            </span>
            <span>{` Or do you just have a million-dollar idea and don’t know how to build it? Worry not as we bring to you a wide variety of services with our `}</span>
            <span className="want-to-upscale1">
              top-notch entrepreneurship experts
            </span>
            <span> to help you realize your dream</span>
          </div>
        </div>
      </div>
      <div className="form1">
        <div className="header3">
          <div className="connect-border14">Tell us about your startup</div>
          <div className="lets-dive-into1">
            Let's dive into a deeper understanding of your preferences and
            interests to assist you in discovering exactly what you seek.
          </div>
        </div>
        <div className="contentforn1">
          <div className="field11">
            <div className="startupname-field1">
              <div className="label14">Startup Name</div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Your Statup name</div>
              </div>
            </div>
            <div className="startupname-field1">
              <div className="label14">Product/Service</div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Your product/Service</div>
              </div>
            </div>
          </div>
          <div className="field11">
            <div className="startupname-field1">
              <div className="label14">E-mail</div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Your email</div>
              </div>
            </div>
            <div className="startupname-field1">
              <div className="label14">Phone number</div>
              <div className="textbox17">
                <div className="pricing17" />
                <div className="yourmailgmailcom14">{`+91 `}</div>
                <div className="yourmailgmailcom14">|</div>
                <div className="yourmailgmailcom14">98765 54321</div>
              </div>
            </div>
          </div>
          <div className="field11">
            <div className="startupname-field1">
              <div className="label14">Founding Date</div>
              <div className="textbox18">
                <div className="yourmailgmailcom14">13/06/2023</div>
                <img
                  className="calendar-calendar-days2"
                  alt=""
                  src="/calendar--calendar-days1.svg"
                />
              </div>
            </div>
            <div className="startupname-field1">
              <div className="label14">Current Valuation</div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Current Valuation</div>
              </div>
            </div>
          </div>
          <div className="field11">
            <div className="startupname-field1">
              <div className="label14">What stage is it in right now?</div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Type...</div>
              </div>
            </div>
            <div className="startupname-field1">
              <div className="label14">
                Any links to your startup that you want us to see?
              </div>
              <div className="textbox14">
                <div className="yourmailgmailcom14">Links...</div>
              </div>
            </div>
          </div>
          <div className="name-field3">
            <div className="label14">What are you looking for?</div>
            <div className="textbox22">
              <div className="yourmailgmailcom14">Type...</div>
            </div>
          </div>
        </div>
        <div className="othersendotp-btn1">
          <div className="pricing17">Submit</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Entrepreneurship;
