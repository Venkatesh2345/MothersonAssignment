import { useEffect } from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import "./index.css";
const Contacts = () => {
  return (
    <footer id="contact-us">
      <section className="container" style={{ marginTop: 20 }}>
        <>
          <section className="container">
            <section className="sub-heading-container">
              <h2 className="sub-heading">Contact Us</h2>
            </section>
            <form
              onSubmit={(event) => {
                // this.onSubmitForm(event, addProject);
              }}
            >
              <section className="input-field-container">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  // value={name}
                  // onChange={this.onChangeName}
                  required
                />
              </section>
              <section className="input-field-container">
                <label htmlFor="link">Email</label>
                <input
                  id="link"
                  type="text"
                  // value={link}
                  // onChange={this.onChangeLink}
                  required
                />
              </section>
              <section className="input-field-container">
                <label htmlFor="description">Message</label>
                <textarea
                  id="descriptio"
                  // value={description}
                  // onChange={this.onChangeDescription}
                  required
                />
              </section>
              <section>
                <button type="submit" className="btn">
                  Send
                </button>
              </section>
            </form>
          </section>
        </>
        <section className="icons">
          <FaInstagramSquare />
          <FaLinkedin />
          <MdMail />
        </section>
        <p>Copyright © 2024. All rights reserved</p>
        <section className="contacts-bg-container"></section>
      </section>
    </footer>
  );
};

export default Contacts;
