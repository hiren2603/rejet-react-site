import React, {useState} from "react";
import classes from "./Form.module.css";
import { send } from 'emailjs-com';


const Form = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    phone:'',
    city:'',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_728pi8n',
      'template_n1df23r',
      toSend,
      'user_L5xYRhbwHzaofEGYMkFhV'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true)
        setToSend({
          name: '',
          email: '',
          phone:'',
          city:'',
          message: '',
          reply_to: ''
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    
  };


  return (
    <section className={classes.form__container}>
      <div className={classes.title__container}>
        <h1 className={classes.form__title}>Get in Touch</h1>
        <span className={classes.title__devider}></span>
      </div>
      {success && <p className={classes.success__message}>Message sent successfully</p> }
      <form className={classes.contact__form} onSubmit={onSubmit}>
      <div className={classes.input__field__container}>
          <input
            className={classes.contact__input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={toSend.name}
            onChange={handleChange}
            required
          />
          <input
            className={classes.contact__input}
            type="email"
            name="email"
            placeholder="Email"
            value={toSend.email}
            onChange={handleChange}
            required
          />
          <input
            className={classes.contact__input}
            type="phone"
            name="phone"
            placeholder="Phone"
            value={toSend.phone}
            onChange={handleChange}
            required
          />
          <input
            className={classes.contact__input}
            type="text"
            name="city"
            placeholder="City"
            value={toSend.city}
            onChange={handleChange}
            required
          />
        </div>
          <div className={classes.textarea__container}>
          <textarea
            className={classes.contact__textarea}
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
            rows="5"
            // cols="130"
          />
          </div>
            <button className={classes.form__button}>SEND</button>
      </form>
    </section>
  );
};

export default Form;
