import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import style from "./Contacts.module.scss";
import commonStyle from "../common/styles/Styles.module.css";
import { Title } from "../common/components/Title/Title";
import { Footer } from "./Footer/Footer";
import { Button } from "../common/components/Button/Button";
import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la1nv8m",
        "template_w8108kd",
        form.current,
        "user_SqtsfRe3OXj67NLy3F4H9"
      )
      .then(
        (result) => {
          form.current.reset();
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className={style.item}>
      <div className={`${commonStyle.container} ${style.contactsContainer}`}>
        <Title title={"contact "} subtitle={"me"} bgTitle={"feel free to"} />
        <div className={style.contentContainer}>
          <Footer />
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <input name="name" id="name" placeholder="Your name" required />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message here"
              required
            ></textarea>
            <Button
              text="Send message"
              ico={faPaperPlane}
              value="Send"
              type="submit"
              className={style.submit}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
