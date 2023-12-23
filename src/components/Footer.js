import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon  from '@mui/icons-material/Twitter';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">

          <a name="Instagram"  href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon/>
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
          </a>

        </div>
        <p> &copy; 2023 Anne'sBakery.com </p>
      
    </div>
  )
}

export default Footer
