import React from 'react';

const Footer = () => {
  return(
    <div>
      <footer className="footer">
        <div className="container">
          <div className="col-md-12">
            <br/>
            <p className="text-muted">
                &copy; 2016 <a href="http://hackoregon.org">HackOregon.org</a>&nbsp-&nbsp
                <a href="https://twitter.com/HackOregon">Twitter</a>&nbsp
                  <a href="mailto:catherine@hackoregon.org">Email</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;