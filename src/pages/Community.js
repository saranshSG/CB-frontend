import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Community.css";
import { useNavigate } from "react-router-dom";
const Community = () => {
  return (
    <div className="community29">
      <div className="herosec8">
        <div className="content50">
          <Navbar/>
          <div className="description29">
            <div className="text1">
              <div className="connecting-people-sparking-container1">
                <p className="connecting-people1">{`Connecting people, `}</p>
                <p className="connecting-people1">{`sparking conversations, `}</p>
                <p className="connecting-people1">{`and building a thriving `}</p>
                <p className="connecting-people1">online community</p>
              </div>
              <div className="living-abroad-and1">
                Living abroad and eager to connect with professionals from your
                homeland?
              </div>
            </div>
            <img
              className="illustration-icon1"
              alt=""
              src="/illustration.svg"
            />
          </div>
          <div className="cta1">
            <div className="find-and-join1">
              Find and join our vibrant community today and expand your
              professional horizons wherever you are. Together, let's build a
              global network that supports and empowers professionals living
              abroad.
            </div>
            <div className="othersendotp-btn4">
              <div className="pricing31">Find Community</div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutsec1">
        <div className="content51">
          <div className="description30">
            <div className="texts21">
              <div className="living-abroad-and-container1">
                <span>{`Living abroad and eager to connect with professionals from your homeland? Look no further as `}</span>
                <span className="connect-border-bridges1">
                  Connect Border bridges the gap between
                </span>
                <span>{` expatriates by helping you connect with fellow compatriots in your area for valuable professional networking. `}</span>
              </div>
              <div className="unlock-a-wealth1">
                Unlock a wealth of opportunities, share experiences, and
                collaborate with like-minded individuals who understand your
                cultural background. 
              </div>
            </div>
            <img className="frame-icon1" alt="" src="/frame.svg" />
          </div>
          <div className="as-a-professional-container1">
            <span className="connect-border-bridges1">As a professional</span>
            <span>
              , recognizing the value of expanding your network and establishing
              meaningful connections is pivotal. Our platform enables you to
              connect with
            </span>
            <span className="connect-border-bridges1">
              {" "}
              like-minded professionals
            </span>
            <span>{` who share your cultural background, industry expertise, and professional ambitions. Whether you are an experienced entrepreneur, a seasoned executive, a specialized expert, or a respected professional in your field, our platform offers a community of esteemed professionals eager to `}</span>
            <span className="engage-with-you1">engage with you.</span>
          </div>
        </div>
      </div>
      <div className="step1">
        <div className="buttons15">
          <div className="content52">
            <div className="expand-your-professional-container1">
              <ul className="expand-your-professional1">
                Expand Your Professional Network
              </ul>
            </div>
            <div className="by-connecting-with1">
              By connecting with compatriots in your adopted country, you gain
              access to a wealth of industry knowledge, potential
              collaborations, and partnerships that can propel your career to
              new heights.
            </div>
          </div>
          <img className="img-icon5" alt="" src="/img@2x.png" />
        </div>
        <div className="row21">
          <img className="img-icon6" alt="" src="/img1@2x.png" />
          <div className="content52">
            <div className="expand-your-professional-container1">
              <ul className="expand-your-professional1">
                Industry Insights and Local Expertise
              </ul>
            </div>
            <div className="by-connecting-with1">
              Engage in valuable discussions with professionals who possess
              firsthand knowledge and understanding of the local business
              landscape, industry trends, and market dynamics.
            </div>
          </div>
        </div>
        <div className="row31">
          <div className="content52">
            <div className="expand-your-professional-container1">
              <ul className="expand-your-professional1">
                Collaboration and Synergies
              </ul>
            </div>
            <div className="by-connecting-with1">
              Discover professionals from your home country who possess
              complementary skills, expertise, or business interests
            </div>
          </div>
          <img className="img-icon7" alt="" src="/img2@2x.png" />
        </div>
        <div className="row41">
          <img className="img-icon8" alt="" src="/img8@2x.png" />
          <div className="content52">
            <div className="expand-your-professional-container1">
              <ul className="expand-your-professional1">
                Mentorship and Guidance:
              </ul>
            </div>
            <div className="by-connecting-with1">
              Benefit from the wisdom and guidance of experienced professionals
              who have successfully established themselves in your adopted
              country.
            </div>
          </div>
        </div>
        <div className="row51">
          <div className="content52">
            <div className="expand-your-professional-container1">
              <ul className="expand-your-professional1">
                Career Opportunities:
              </ul>
            </div>
            <div className="by-connecting-with1">
              Our platform serves as a hub for career opportunities within your
              compatriot community. Stay informed about local job openings,
              executive positions, consulting engagements, and other
              professional avenues that align with your expertise.
            </div>
          </div>
          <img className="img-icon9" alt="" src="/img9@2x.png" />
        </div>
      </div>
      <i className="sign-up-now1">
        Sign up now to explore the world of new possibilities and connect with
        your compatriots abroad!
      </i>
      <Footer/>
    </div>
  );
};

export default Community;
