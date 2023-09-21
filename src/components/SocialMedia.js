import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
 

class SocialMedia extends Component {
   

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container">
        <a
          href="https://www.linkedin.com/in/amit-raj-1430b1201/"
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
         
        <a href="https://github.com/amitrajjnv2013" className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href="amitrajjnv431@gmail.com" className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialMedia;