import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef,useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gcmeip2",
        "template_sdbyb5e",
        formRef.current,
        "hn6r4-MhmKX4ULNPB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9133644333
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              vamsik5061@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Rajahmundry,AndhraPradesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <h5 className="c-desc">
            Any feedback or want to colloborate for projects? Ping me😁
          </h5>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button className="gradient-btn">Submit</button>
            {done && "Thank you...😊"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;