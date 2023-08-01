import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Entrepreneurship from "./pages/Entrepreneurship";
import AboutUs from "./pages/AboutUs";
import MentorList from "./pages/MentorList";
import Community from "./pages/Community";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import BlogPostLandingPage from "./pages/BlogPostLandingPage";
import Events from './pages/Events'
import JoinUs from './pages/JoinUs'
import Pricing from './pages/Pricing'
import { useEffect } from "react";
import Signup from "./pages/auth/SignupPage";
import Login from "./pages/auth/LoginPage";
import YoutubeMonetise from './pages/YoutubeMonetise'
import MentorProfile from "./pages/MentorProfile";
import MenteesProfile from "./pages/MenteesProfile";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blog-post":
        title = "";
        metaDescription = "";
        break;
      case "/entrepreneurship":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/mentorlist":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/contactus":
        title = "";
        metaDescription = "";
        break;
      case "/landingpage":
        title = "";
        metaDescription = "";
        break;
      case "/blogpostlanding-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog-post/:_id" element={<BlogPost />} />
      <Route path="/entrepreneurship" element={<Entrepreneurship />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/mentorlist" element={<MentorList />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/blogposts" element={<BlogPostLandingPage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/mentors" element={<MentorList/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/join" element={<JoinUs/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/mentors" element={<JoinUs/>} />
      <Route path="/youtube" element={<YoutubeMonetise/>} />
      <Route path="/profile/mentor" element={<MentorProfile/>} />
      <Route path="/profile/mentee" element={<MenteesProfile/>} />
    </Routes>
  );
}
export default App;
