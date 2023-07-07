import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div  className={classes.footer1}>
        <div className={classes.footer2}>
          <h1>Resources</h1>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Book your stay</li>
            <li>Courses</li>
          </ul>
        </div>
        <div className={classes.footer2}> <h1>Support</h1>
          <ul>
            <li>Chat With Us</li>
            <li>Help Center</li>
            <li>Safety </li>
            <li>Cleanning </li>
            <li>Rating</li>
          </ul></div>
        <div className={classes.footer3}> <h1>Let's Do It</h1>
          <ul>
            <li>RateUs</li>
            <li>How was Experience</li>
            <li><input type='text' /></li>
            <li><button>Submit</button></li>
            <li>Courses</li>
          </ul></div>
        
      </div>
    </div>
  );
}

export default Footer;
