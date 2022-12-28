import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [email, setEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3vc5z1m",
        "template_whysonf",
        formRef.current,
        "bbQj90yRnBDdTZIG9"
      )
      .then(
        (result) => {
          setEmail(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-back"></div>
      <div className="contact_container">
        <div className="content-left">
          <div className="contact-title">Let's connect with each other</div>
          <div className="contact-info">
            <div className="info-item">
              <img src="/assets/images/phone.png" alt="" className="icon"></img>
              +91 8104460774
            </div>
            <div className="info-item">
              <img src="/assets/images/email.png" alt="" className="icon"></img>
              hdtawde@gmail.com
            </div>
            <div className="info-item">
              <img
                src="/assets/images/address.png"
                alt=""
                className="icon"
              ></img>
              71/5 Nehru Nagar Kurla East Mumbai - 40004
            </div>
          </div>
        </div>
        <div className="content-right">
          <p className="contact-descrip">
            <b>What's your story ?</b> <br />
            Let's Get in touch over a cup of tea.
          </p>
          {email ? (
            <p className="email-success">
              Thank you for your email , I will connect with you as soon as
              possible.
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input type="text" placeholder="Name" name="user_name"></input>
              <input type="text" placeholder="Subject" name="user_sub"></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
              ></textarea>
              <button>Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
