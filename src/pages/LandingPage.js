import CommunityCard from "../components/CommunityCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderData } from "../assets/images";
import "./LandingPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const location= useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  return (
    <div className="landingpage">
      <header className="herosection5">
        <Navbar/>
        <b className="connecting-global-leaders1">
          Connecting global leaders to aspiring minds
        </b>
        <div>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            focusOnSelect={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {sliderData.map(data => (
              <img src={data.url} alt='Slider' width='100%' />
            ))}
          </Carousel>
        </div>
        <div className="landing-categories1">
          <div className="cat11">
            <div className="talent-visa1">Talent Visa</div>
          </div>
          <div className="cat11">
            <div className="talent-visa1">Career Guidance</div>
          </div>
          <div className="cat11">
            <div className="talent-visa1">Marketing</div>
          </div>
          <div className="cat11">
            <div className="talent-visa1">Startup Mentor</div>
          </div>
        </div>
        <div className="ctas2">
          <div className="pricing37">
            Explore your interest with expert mentorship from leaders around the
            globe.
          </div>
          <div className="button31" onClick={()=>{location('/join')}}>
            <div className="community36" >FIND</div>
          </div>
        </div>
      </header>
      <div className="requestmentorsec1">
        <div className="content89">
          <div className="grow-your-startup-container1">
            <p className="grow-your-startup1">{`Grow your startup with our entrepreneurship coterie `}</p>
            <p className="grow-your-startup1">
              <span>{`and find the perfect `}</span>
              <span className="gurus1">gurus</span>
              <span className="and1">{` and `}</span>
              <span className="gurus1">incubators</span>
              <span className="and1"> to upscale your dream.</span>
            </p>
          </div>
          <div className="ctas3">
            <div className="have-someone-on-container1">
              <p className="grow-your-startup1">{`Have someone on your mind to guide you? `}</p>
              <p className="grow-your-startup1">We’ll bring them to you!</p>
            </div>
            <div className="button32" onClick={()=>{location('/mentors')}}>
              <div className="community36">Request a mentor</div>
            </div>
          </div>
        </div>
        <img className="img-icon11" alt="" src="/img10.svg" />
      </div>
      <div className="mentorssection1">
        <div className="header10">
          <div className="our-mentors1">Our Mentors</div>
          <div className="your-destination-to-container1">
            <p className="grow-your-startup1">
              Your destination to find global leaders to guide you through your
              journey.
            </p>
            <p className="grow-your-startup1">
              Leaders from over 30 countries. All in one place, ready to guide
              you.
            </p>
          </div>
        </div>
        <div className="mentorsrow15">
          <div className="mentor-profile27">
            <img className="profileicon28" alt="" src="/profileicon71@2x.png" />
            <div className="content90">
              <div className="description38">
                <div className="title41">
                  <div className="community36">Esther Howard</div>
                  <div className="tag28">
                    <div className="web-designer28">Web Designer</div>
                    <div className="mentor56">
                      <img
                        className="profileuserproperty-24-icon28"
                        alt=""
                        src="/profileuserproperty-2447.svg"
                      />
                      <div className="mentor57">{`Mentor `}</div>
                    </div>
                  </div>
                </div>
                <div className="btn44">
                  <div className="viewprofilebtn28">
                    <div className="talent-visa1">View Profile</div>
                  </div>
                  <div className="connectbtn28">
                    <img
                      className="user-user-add28"
                      alt=""
                      src="/user--user-add37.svg"
                    />
                    <div className="talent-visa1">Connect</div>
                  </div>
                </div>
              </div>
              <div className="sociallinks32">
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/sociallinkedinwhite36.svg"
                />
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/socialtwitter35.svg"
                />
                <img
                  className="socialbehance-icon29"
                  alt=""
                  src="/socialbehance3.svg"
                />
              </div>
            </div>
            <img className="interface-icon28" alt="" src="/interface56.svg" />
          </div>
          <div className="mentor-profile28">
            <img
              className="profileicon28"
              alt=""
              src="/profileicon110@2x.png"
            />
            <div className="content90">
              <div className="description38">
                <div className="title41">
                  <div className="community36">Kathryn Murphy</div>
                  <div className="tag28">
                    <div className="web-designer28">Dog Trainer</div>
                    <div className="mentor56">
                      <img
                        className="profileuserproperty-24-icon28"
                        alt=""
                        src="/profileuserproperty-2447.svg"
                      />
                      <div className="mentor57">{`Mentor `}</div>
                    </div>
                  </div>
                </div>
                <div className="btn44">
                  <div className="viewprofilebtn28">
                    <div className="talent-visa1">View Profile</div>
                  </div>
                  <div className="connectbtn28">
                    <img
                      className="user-user-add28"
                      alt=""
                      src="/user--user-add37.svg"
                    />
                    <div className="talent-visa1">Connect</div>
                  </div>
                </div>
              </div>
              <div className="sociallinks32">
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/sociallinkedinwhite36.svg"
                />
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/socialtwitter35.svg"
                />
                <img
                  className="socialbehance-icon29"
                  alt=""
                  src="/socialbehance3.svg"
                />
              </div>
            </div>
            <img className="interface-icon28" alt="" src="/interface56.svg" />
          </div>
          <div className="mentor-profile28">
            <img
              className="profileicon28"
              alt=""
              src="/profileicon210@2x.png"
            />
            <div className="content90">
              <div className="description38">
                <div className="title41">
                  <div className="community36">Wade Warren</div>
                  <div className="tag28">
                    <div className="web-designer28">Medical Assistant</div>
                    <div className="mentor56">
                      <img
                        className="profileuserproperty-24-icon28"
                        alt=""
                        src="/profileuserproperty-2447.svg"
                      />
                      <div className="mentor57">{`Mentor `}</div>
                    </div>
                  </div>
                </div>
                <div className="btn44">
                  <div className="viewprofilebtn28">
                    <div className="talent-visa1">View Profile</div>
                  </div>
                  <div className="connectbtn28">
                    <img
                      className="user-user-add28"
                      alt=""
                      src="/user--user-add37.svg"
                    />
                    <div className="talent-visa1">Connect</div>
                  </div>
                </div>
              </div>
              <div className="sociallinks32">
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/sociallinkedinwhite36.svg"
                />
                <img
                  className="sociallinkedin-white-icon31"
                  alt=""
                  src="/socialtwitter35.svg"
                />
                <img
                  className="socialbehance-icon29"
                  alt=""
                  src="/socialbehance3.svg"
                />
              </div>
            </div>
            <img className="interface-icon28" alt="" src="/interface56.svg" />
          </div>
        </div>
        <div className="view-all9" onClick={()=>{location('/mentors')}}>View all</div>
        <div className="comesfrom1">
          <div className="community36">Where our mentors come from</div>
          <div className="countries3">
            <div className="country4">
              <img
                className="country-child2"
                alt=""
                src="/ellipse-454@2x.png"
              />
              <div className="community36">INDIA</div>
            </div>
            <div className="country4">
              <img
                className="country-child2"
                alt=""
                src="/ellipse-4511@2x.png"
              />
              <div className="community36">Austria</div>
            </div>
            <div className="country4">
              <img
                className="country-child2"
                alt=""
                src="/ellipse-4521@2x.png"
              />
              <div className="community36">Italy</div>
            </div>
            <div className="country4">
              <img
                className="country-child2"
                alt=""
                src="/ellipse-4531@2x.png"
              />
              <div className="community36">Czechia</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overview2">
        <div className="overview3">Overview</div>
        <div className="content93">
          <div className="icontitle1">
            <div className="countries4">
              <div className="image10">
                <img className="start-up-icon1" alt="" src="/startup@2x.png" />
              </div>
              <div className="titile1">
                <div className="countries5">Countries</div>
                <div className="div89">+30</div>
              </div>
            </div>
            <div className="countries4">
              <div className="image11">
                <img className="start-up-icon1" alt="" src="/quality@2x.png" />
              </div>
              <div className="title44">
                <div className="domains3">Domains</div>
                <div className="div90">+70</div>
              </div>
            </div>
            <div className="countries4">
              <div className="image11">
                <img
                  className="start-up-icon1"
                  alt=""
                  src="/customerreview@2x.png"
                />
              </div>
              <div className="title44">
                <div className="startups3">Startups</div>
                <div className="div91">+10</div>
              </div>
            </div>
            <div className="countries4">
              <div className="image13">
                <img
                  className="start-up-icon1"
                  alt=""
                  src="/collaboration@2x.png"
                />
              </div>
              <div className="title44">
                <div className="communities3">Communities</div>
                <div className="div92">+20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post4">
        <div className="content94">
          <div className="heading28">
            <div className="community36">Blog posts</div>
            <div className="experience-the-power1">
              Experience the power of captivating storytelling with our
              integrated blog post feature.
            </div>
          </div>
          <div className="content202">
            <div className="leftframe1">
              <div className="blog16">
                <div className="heading29">
                  <b className="elevating-user-experience3">
                    Elevating User Experience Through Intuitive UI/UX Design
                  </b>
                  <div className="in-todays-digital3">{`In today’s digital age, where user attention spans are shorter than ever, providing a seamless and delightful user experience has become paramount for businesses and organizations. This is where UI (User Interface) and UX (User Experience) design play a crucial role. `}</div>
                </div>
                <div className="content95">
                  <div className="authordate19">
                    <div className="name24">
                      <img
                        className="name-item"
                        alt=""
                        src="/ellipse-2721@2x.png"
                      />
                      <div className="gain-instant-container">
                        <div className="community36">Darrell Steward</div>
                        <div className="uiux-designer25">UI/UX Designer</div>
                      </div>
                      <div className="followbtn21">
                        <div className="talent-visa1">Connect</div>
                      </div>
                    </div>
                    <div className="time21">
                      <div className="talent-visa1">8 min read</div>
                      <div className="time-child16" />
                      <div className="apr-202319">25 Apr 2023</div>
                    </div>
                  </div>
                  <div className="cover25">
                    <img className="imgicon22" alt="" src="/imgicon16.svg" />
                  </div>
                </div>
                <div className="bottomnav21">
                  <div className="tags19">
                    <div className="search338">
                      <div className="pricing37">Design</div>
                    </div>
                    <div className="search338">
                      <div className="pricing37">UI/UX</div>
                    </div>
                  </div>
                  <div className="bookmarklikeoption423">
                    <img
                      className="interface-bookmark21"
                      alt=""
                      src="/interface--bookmark18.svg"
                    />
                    <img
                      className="interface-bookmark21"
                      alt=""
                      src="/interface--heart-019.svg"
                    />
                    <img
                      className="interface-bookmark21"
                      alt=""
                      src="/menu--more-vertical42.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="cta-btn1">
                <div className="title44">
                  <div className="pricing37">{`Ready to Unveil Your Blog's True Potential? `}</div>
                  <div className="take-action-and1">
                    Take Action and Experience Growth!
                  </div>
                </div>
                <div className="button33" onClick={()=>{location('/blogposts')}}>
                  <div className="community36">Explore now!</div>
                </div>
              </div>
            </div>
            <div className="rightframe1">
              <div className="blog17">
                <b className="dear-designers-it18">
                  Dear designers, it is not enough to just do UX design
                </b>
                <div className="content96">
                  <div className="cover26">
                    <div className="cover27">
                      <img className="imgicon23" alt="" src="/imgicon4.svg" />
                    </div>
                    <div className="bottomnav22">
                      <div className="tags20">
                        <div className="search340">
                          <div className="pricing37">Design</div>
                        </div>
                        <div className="search340">
                          <div className="pricing37">UI/UX</div>
                        </div>
                      </div>
                      <div className="bookmarklikeoption424">
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/interface--bookmark19.svg"
                        />
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/interface--heart-0111.svg"
                        />
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/menu--more-vertical110.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="there-is-a18">
                    There is a long-standing debate among the design community
                    about what it really means...
                  </div>
                </div>
                <div className="authordate20">
                  <div className="texts24">
                    <img
                      className="texts-child19"
                      alt=""
                      src="/ellipse-27110@2x.png"
                    />
                    <div className="gain-instant-container">
                      <div className="community36">Darrell Steward</div>
                      <div className="uiux-designer26">UI/UX Designer</div>
                    </div>
                    <div className="followbtn22">
                      <div className="talent-visa1">Connect</div>
                    </div>
                  </div>
                  <div className="time22">
                    <div className="talent-visa1">8 min read</div>
                    <div className="time-child17" />
                    <div className="apr-202319">25 Apr 2023</div>
                  </div>
                </div>
              </div>
              <div className="blog17">
                <b className="dear-designers-it18">
                  Dear designers, it is not enough to just do UX design
                </b>
                <div className="content97">
                  <div className="cover26">
                    <div className="cover27">
                      <img className="imgicon23" alt="" src="/imgicon4.svg" />
                    </div>
                    <div className="bottomnav22">
                      <div className="tags20">
                        <div className="search340">
                          <div className="pricing37">Design</div>
                        </div>
                        <div className="search340">
                          <div className="pricing37">UI/UX</div>
                        </div>
                      </div>
                      <div className="bookmarklikeoption424">
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/interface--bookmark19.svg"
                        />
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/interface--heart-0111.svg"
                        />
                        <img
                          className="interface-bookmark22"
                          alt=""
                          src="/menu--more-vertical110.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="there-is-a18">
                    There is a long-standing debate among the design community
                    about what it really means...
                  </div>
                </div>
                <div className="authordate20">
                  <div className="texts24">
                    <img
                      className="texts-child19"
                      alt=""
                      src="/ellipse-27110@2x.png"
                    />
                    <div className="gain-instant-container">
                      <div className="community36">Darrell Steward</div>
                      <div className="uiux-designer26">UI/UX Designer</div>
                    </div>
                    <div className="followbtn22">
                      <div className="talent-visa1">Connect</div>
                    </div>
                  </div>
                  <div className="time22">
                    <div className="talent-visa1">8 min read</div>
                    <div className="time-child17" />
                    <div className="apr-202319">25 Apr 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="youtube1">
        <img className="frame-icon3" alt="" src="/frame1.svg" />
        <div className="content98">
          <div className="take-a-quantum-container1">
            <p className="grow-your-startup1">{`Take a quantum leap forward `}</p>
            <p className="grow-your-startup1">{`with us on our action-packed `}</p>
            <p className="grow-your-startup1">YouTube channel!</p>
          </div>
          <div className="top-notch-creator-container1">
            <ul className="top-notch-creator-sharing-your1">
              <li className="top-notch-creator1">Top notch creator</li>
              <li className="top-notch-creator1">Sharing your videos</li>
              <li>Monetizing features</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="testimonials1">
        <div className="community36">What users says?</div>
        <div className="testimonails1">
          <div className="testimonail11">
            <div className="content99">
              <img className="image-icon5" alt="" src="/image3@2x.png" />
              <div className="header11">
                <div className="title213">
                  <div className="community36">Marvin McKinney</div>
                  <div className="mentees3">(Mentees)</div>
                </div>
                <div className="marketing-coordinator3">
                  Marketing Coordinator
                </div>
              </div>
              <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
              <div className="stars3">
                <img className="stars-child12" alt="" src="/star-1.svg" />
                <img className="stars-child12" alt="" src="/star-2.svg" />
                <img className="stars-child12" alt="" src="/star-3.svg" />
                <img className="stars-child12" alt="" src="/star-4.svg" />
                <img className="stars-child12" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="testimonail21">
            <div className="content100">
              <img className="image-icon6" alt="" src="/image11@2x.png" />
              <div className="header12">
                <div className="title213">
                  <div className="community36">Marvin McKinney</div>
                  <div className="mentees4">(Mentees)</div>
                </div>
                <div className="marketing-coordinator4">
                  Marketing Coordinator
                </div>
              </div>
              <div className="lorem-ipsum-dolor10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
              <div className="stars4">
                <img className="stars-child17" alt="" src="/star-11.svg" />
                <img className="stars-child17" alt="" src="/star-11.svg" />
                <img className="stars-child17" alt="" src="/star-11.svg" />
                <img className="stars-child17" alt="" src="/star-11.svg" />
                <img className="stars-child17" alt="" src="/star-51.svg" />
              </div>
            </div>
          </div>
          <div className="testimonail31">
            <div className="content101">
              <img className="image-icon7" alt="" src="/image21@2x.png" />
              <div className="header13">
                <div className="title213">
                  <div className="community36">Marvin McKinney</div>
                  <div className="mentees5">(Mentees)</div>
                </div>
                <div className="marketing-coordinator5">
                  Marketing Coordinator
                </div>
              </div>
              <div className="lorem-ipsum-dolor11">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
              <div className="stars3">
                <img className="stars-child22" alt="" src="/star-12.svg" />
                <img className="stars-child22" alt="" src="/star-21.svg" />
                <img className="stars-child22" alt="" src="/star-31.svg" />
                <img className="stars-child22" alt="" src="/star-41.svg" />
                <img className="stars-child22" alt="" src="/star-52.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="pagination1">
          <img className="line-4-stroke1" alt="" src="/line-4-stroke.svg" />
          <img className="line-4-stroke1" alt="" src="/line-5-stroke.svg" />
          <img className="line-4-stroke1" alt="" src="/line-6-stroke.svg" />
          <img className="line-4-stroke1" alt="" src="/line-5-stroke.svg" />
          <img className="line-4-stroke1" alt="" src="/line-6-stroke.svg" />
        </div>
      </div>
      <FaqSection/>
      <CommunityCard communityDescription="Join our discord community to find your fellow countrymen away from home." />
      <Footer/>
    </div >
  );
};
export default LandingPage;
