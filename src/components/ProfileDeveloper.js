import { Component } from "react";
import SocialMedia from "./SocialMedia";

class ProfileDeveloper extends Component {
   
  render() {
     
    return (
      <div className="profile-user-card">
          <img
            className="profile-user-img"
            src="https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png"
            alt="Amit Raj"
            title="Amit"
          />
          <h3 className="profile-user-bio">Amit Raj</h3>
          <p className="profile-user-bio">( Social media profile of developer )</p>
          <SocialMedia />
      </div>
    );
  }
}

export default ProfileDeveloper;