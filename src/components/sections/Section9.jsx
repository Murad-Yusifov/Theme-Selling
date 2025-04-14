import React, { useState } from "react";
import styles from "./Sections.module.scss";
import axios from "axios";

const Section9 = () => {
  const [name, setInput] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    axios.post(`https://northwind.vercel.app/api/products`, {
      name: name,
      surName: surName,
      email: email,
      subject: subject,
      text: text,
    });
  };

  return (
    <div>
      <section className={styles.section9} id="contact">
        <h1>Contact Form</h1>
        <form action="" onSubmit={sendData}>
          <label htmlFor="inputField" className={styles.name}>
            Enter Your Name:
            <input
              placeholder="Add your name"
              id="inputField"
              type="text"
              value={name}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>

          <label htmlFor="inputField">
            Last Name:
            <input
              placeholder="Add your lastname"
              id="inputField"
              type="text"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
          </label>

          <label htmlFor="inputField" className={styles.email}>
            Email:
            <input
              placeholder="Add your email"
              id="inputField"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="inputField" className={styles.subject}>
            Subject:
            <input
              placeholder="Send your message"
              id="inputField"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <div className={styles.textArea}>
          <p>Message</p>
          <textarea
            placeholder="Send your message"
            name=""
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            Send data
          </button>
        </form>
      </section>
    </div>
  );
};

export default Section9;
