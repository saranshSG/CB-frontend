import Footer from "../components/Footer";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="herosec1">
        <div className="content108">
          <div className="navbar6">
            <div className="logo14">
              <img className="favicon7" alt="" src="/favicon2.svg" />
              <div className="laliy-gautam">CONNECT BORDER</div>
            </div>
            <div className="navitem7">
              <div className="find-work7">
                <div className="laliy-gautam">Community</div>
              </div>
              <div className="find-work7">
                <div className="laliy-gautam">Blog Posts</div>
              </div>
              <div className="find-work7">
                <div className="laliy-gautam">Entrepreneurship</div>
              </div>
              <div className="find-work7">
                <div className="laliy-gautam">Events</div>
              </div>
            </div>
            <div className="buttons7">
              <div className="pricing14">
                <div className="pricing15">Pricing</div>
              </div>
              <div className="sign-up7">
                <div className="pricing15">Log in</div>
              </div>
            </div>
          </div>
          <div className="aboutus1">
            <div className="laliy-gautam">About us</div>
            <div className="we-are-a">
              We are a global network of like-minded individuals who believe in
              a borderless and connected world, working together to address the
              most critical challenges and foster harmony among humanity. At
              Connect Borders, we are an exclusive network committed to
              fostering true global connectivity and transcending boundaries.
            </div>
          </div>
        </div>
      </div>
      <div className="ourmissionsec">
        <div className="content109">
          <div className="our-mission">Our Mission</div>
          <div className="our-mission-at-container">
            <span>{`Our mission at `}</span>
            <span className="connect-borders">Connect Borders</span>
            <span>
              {" "}
              is to harness the power of mentorship and bridge the gap between
              aspiring minds and experienced professionals worldwide. Through
              our platform, we serve as a catalyst for personal and professional
              growth, connecting you with mentors who will unlock your full
              potential. With our extensive network of mentors and one-of-a-kind
              platform that brings compatriots from different countries
              together, we aim to create meaningful relationships that empower
              you to thrive in an interconnected world.
            </span>
          </div>
        </div>
        <img className="image-icon" alt="" src="/image@2x.png" />
        <div className="join-us-today">
          Join us today and embark on a transformative journey of guidance,
          inspiration, and limitless possibilities. Together, we can unlock a
          world of opportunities that know no border.
        </div>
        <div className="button2">
          <div className="laliy-gautam">Join Now</div>
        </div>
      </div>
      <div className="leaderssec">
        <div className="heading11">
          <div className="our-leaders">Our Leaders</div>
          <div className="our-leadership-development">
            Our leadership development focuses on nurturing individuals who
            embody empowerment, integrity, and strong communication abilities.
          </div>
        </div>
        <div className="leaders">
          <div className="founder">
            <div className="founder-child" />
            <div className="content110">
              <div className="title13">
                <div className="laliy-gautam">Laliy Gautam</div>
                <div className="founder1">(Founder)</div>
              </div>
              <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
            </div>
            <div className="sociallinks12">
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/sociallinkedin1.svg"
              />
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/socialtwitter.svg"
              />
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/socialfacebook1.svg"
              />
            </div>
          </div>
          <div className="founder">
            <div className="founder-child" />
            <div className="content110">
              <div className="title13">
                <div className="laliy-gautam">Rahul Gundala</div>
                <div className="founder1">(Co-Founder)</div>
              </div>
              <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
            </div>
            <div className="sociallinks12">
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/sociallinkedinwhite.svg"
              />
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/socialtwitter.svg"
              />
              <img
                className="sociallinkedin-icon"
                alt=""
                src="/socialfacebook1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="teamsec">
        <div className="header2">
          <div className="our-team">Our Team</div>
          <div className="our-team-culture">
            Our team culture revolves around the values of transparency,
            empathy, and effective communication, even in a remote setting
          </div>
        </div>
        <div className="leader1-parent">
          <div className="leader1">
            <div className="founder-child" />
            <div className="title15">
              <div className="leader-name">Pratheek Bhat</div>
              <div className="project-manager">Project Manager</div>
            </div>
          </div>
          <div className="leader1">
            <div className="founder-child" />
            <div className="title15">
              <div className="leader-name">Kalyan Kumar Merugu</div>
              <div className="project-manager">Project Manager</div>
            </div>
          </div>
          <div className="leader1">
            <div className="founder-child" />
            <div className="title15">
              <div className="leader-name">Jagu Rathava</div>
              <div className="project-manager">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
