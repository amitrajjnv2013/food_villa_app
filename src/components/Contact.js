import { useState } from "react";
import contact from "/images/contact.png";
import ProfileDeveloper from "./ProfileDeveloper";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container" >
      <div className='developer-profile'>
      {/* <img src={contact} alt="" /> */}
      <ProfileDeveloper />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks for contacting FoodVilla, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;