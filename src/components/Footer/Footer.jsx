import './Footer.css';
import Social from '../common/Social';

const Footer = () => {
  const year = new Date();
  return (
    <footer id="footer">
      <div className="logo">
        <a href="#header">
          Chris-<span>MK34</span>
        </a>
      </div>
      <Social />

      <p>
        <span>
          <small>Chris-MK34</small>
        </span>
        @{year.getFullYear()} All right are Preserved.
      </p>
    </footer>
  );
};

export default Footer;
