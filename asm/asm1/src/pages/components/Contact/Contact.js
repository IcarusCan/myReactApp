import './Contact.css';

function Contact() {
  return (
    <div className="subcribe">
      <div className="subcribe-container">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <form className="subcribe-form">
          <input
            id="email-sub"
            name="email-sub"
            type="text"
            placeholder="Your Email"
          />
          <button className="btn btn-sub">Subcribe</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
