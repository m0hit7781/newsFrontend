import "../App.css";
import { Link } from "react-router-dom";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="./images/footerlogo.png" alt="logo" />
        <p>Copyright &copy; 2021 | NBC News</p>
      </div>
      <div className="footermiddlemenu">
        <Link to="privacy-policy">
          <p>Privacy Policy</p>
        </Link>
        <Link to="privacy-policy">
          <p>Do not sell my personal information</p>
        </Link>
        <Link to="terms-of-service">
          <p>Terms of Service</p>
        </Link>
        <Link to="sitemap">
          <p>NBC.com Sitemap</p>
        </Link>
      </div>
      <div className="footermenuright">
          <div className="menufooterlist">
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/contact">
                    <p>Contact</p>
                </Link>
                <Link to="/career">
                    <p>Career</p>
                </Link >
                <Link to="/coupons">
                    <p >Coupons</p>
                </Link>
          </div>
          <div className="socialiconsfooter">
                <RssFeedIcon style={{fontSize: '40px', marginRight: '10px'}} />
                <TwitterIcon style={{fontSize: '40px', marginRight: '10px'}} />
                <GitHubIcon style={{fontSize: '40px', marginRight: '10px'}} />
                <FacebookIcon style={{fontSize: '40px'}} />
          </div>
      </div>
    </div>
  );
};

export default Footer;
