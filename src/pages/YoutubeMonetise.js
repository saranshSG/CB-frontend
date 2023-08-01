import { memo } from "react";
import "./YoutubeMonetise.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FaqSection from "../components/FaqSection";
const YoutubeMonetise = memo(() => {
  return (
    <div className="youtubemonetise">
      <Navbar/>
      <div className="heading69">
        <div className="want-to-grow">Want to grow on YouTube?</div>
        <div className="make-it-easy-container">
          <p className="make-it-easy">Make it easy with</p>
          <p className="connect-border43">Connect Border</p>
        </div>
      </div>
      <div className="img">
        <div className="unlock-the-secrets">
          Unlock the secrets to explosive YouTube growth and watch your channel
          soar to new heights of success!
        </div>
        <img className="youtube-img-icon6" alt="" src="/img12@2x.png" />
      </div>
      <div className="service14">
        <img className="illustration-icon1" alt="" src="/illustration2.svg" />
        <div className="content214">
          <div className="absorb-wisdom-from-container">
            <p className="make-it-easy">{`Absorb wisdom from creators `}</p>
            <p className="make-it-easy">and enrich our knowledge.</p>
          </div>
          <div className="immerse-yourself-in">
            Immerse yourself in the profound wisdom of talented creators who
            have shaped the digital landscape. By embracing their invaluable
            insights and innovative approaches, we can deepen our knowledge and
            understanding.
          </div>
        </div>
      </div>
      <div className="service24">
        <div className="content214">
          <div className="absorb-wisdom-from-container">
            <p className="make-it-easy">{`Are you a content creator with a `}</p>
            <p className="make-it-easy">{`passion for making engaging `}</p>
            <p className="make-it-easy">videos?</p>
          </div>
          <div className="immerse-yourself-in">
            Look no further! Our dynamic platform warmly welcomes and celebrates
            your creativity. By sharing your videos with us, you gain access to
            a vibrant community that values originality and fresh perspectives.
          </div>
        </div>
        <img className="illustration-icon2" alt="" src="/illustration3.svg" />
      </div>
      <div className="service24">
        <img className="frame-icon14" alt="" src="/frame4.svg" />
        <div className="content214">
          <div className="absorb-wisdom-from-container">
            <p className="make-it-easy">Monetize your videos</p>
            <p className="make-it-easy">through ads or subscriptions.</p>
          </div>
          <div className="immerse-yourself-in">
            {" "}
            By leveraging ads or subscriptions, you can unlock a world of income
            streams, transforming your content into a sustainable source of
            revenue. Seize this opportunity to monetize your talent and
            dedication, paving the way for exciting new possibilities in your
            creative journey.
          </div>
        </div>
      </div>
      <FaqSection/>
      <Footer/>
    </div>
  );
});

export default YoutubeMonetise;
